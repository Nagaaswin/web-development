//pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 3));
console.log(add(2, 3));

//impure function

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(6));

//factory functions => A function creates another function

function createTaxCalucaltor(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalucaltor(0.19);
const calculateincomeTaxAmount = createTaxCalucaltor(0.25);

console.log(calculateVatAmount(1000));
console.log(calculateincomeTaxAmount(2000));

//Powerful usuage of recursion

const myself = {
  name: 'Naga',
  friends: [
    {
      name: 'hemanth',
      friends: [
        {
          name: 'gautam',
        },
      ],
    },
    {
      name: 'bharath',
      friends: [
        {
          name: 'vishal',
        },
      ],
    },
  ],
};

function getFriendsNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendsNames(friend));
  }

  return collectedNames;
}

console.log(getFriendsNames(myself));
