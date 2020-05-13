const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'attack';
const MODE_STRONG_ATTACK = 'strongAttack';
const LOG_EVENT_PLAYER_ATTACK = 'playerAttack';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'playerStrongAttack';
const LOG_EVENT_MONSTER_ATTACK = 'monsterAttack';
const LOG_EVENT_PLAYER_HEAL = 'playerHeal';
const LOG_EVENT_GAME_OVER = 'gameOver';

let battleLog = [];

function getMaxLifeValues() {
  const enteredNumber = prompt('Max life for your monster and you.', '100');
  let parsedValues = parseInt(enteredNumber);
  if (isNaN(parsedValues) || parsedValues <= 0) {
    throw { message: 'This is not a valid user input, enter a number!' };
  }
  return parsedValues;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You Entered Something Wrong so default value of 100 is used!');
}

let currentMonsterHealth = chosenMaxLife;
let currenPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(eve, val, monsterHealth, playerHealth) {
  let logentry = {
    event: eve,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (eve) {
    case LOG_EVENT_PLAYER_ATTACK:
      logentry.target = 'Monster';
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logentry.target = 'Monster';
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logentry.target = 'Player';
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logentry.target = 'Player';
  }
  battleLog.push(logentry);
}

function reset() {
  currenPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currenPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currenPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currenPlayerHealth
  );

  if (currenPlayerHealth <= 0 && hasBonusLife) {
    currenPlayerHealth = initialPlayerHealth;
    hasBonusLife = false;
    removeBonusLife();
    setPlayerHealth(initialPlayerHealth);
    alert('You would have been dead but bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currenPlayerHealth > 0) {
    alert('You Won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'Player won',
      currentMonsterHealth,
      currenPlayerHealth
    );
  } else if (currenPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost! ');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'Player Lost',
      currentMonsterHealth,
      currenPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currenPlayerHealth <= 0) {
    alert('You have draw! ');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A draw match',
      currentMonsterHealth,
      currenPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currenPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logevent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logevent, damage, currentMonsterHealth, currenPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let heal;
  if (currenPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    heal = chosenMaxLife - currenPlayerHealth;
  } else {
    heal = HEAL_VALUE;
  }
  increasePlayerHealth(heal);
  currenPlayerHealth += heal;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    heal,
    currentMonsterHealth,
    currenPlayerHealth
  );
  endRound();
}

function showLogHandler() {
  for (let i = 0; i < 3; i++) console.log('-----');

  let i = 0;
  for (const logEnt of battleLog) {
    console.log(`#${i++}`);
    for (const key in logEnt) console.log(`${key} => ${logEnt[key]}`);
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', showLogHandler);
