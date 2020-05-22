/*const numbers = [1, 2, 3];
console.log(numbers);

const morenumbers = new Array(5, 3);
console.log(morenumbers);

const yetmorenumbers = Array.of(1, 2);
console.log(yetmorenumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems); // converts iterables into array
console.log(arrayListItems);

const hobbies = ['football', 'reading'];
const personalData = [21, 'naga', { moreDetailse: [] }];

const analyticsData = [
  [1, 1.6],
  [2, 5],
  [4, 6],
]; //Multi-Dimensional array

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);*/

/*//Adding and deleting elements in an array

const hobbies = ['sports', 'reading'];
hobbies.push('cooking'); // adds element to the last
hobbies.unshift('coding'); // adds element to the front
const poppedValue = hobbies.pop(); //removes element from the last
hobbies.shift(); //Removes element from the front
console.log(hobbies);

hobbies[1] = 'coding'; //changing existing element of an array
hobbies[5] = 'as'; // adding an element to an index grater than the defined will create a empty blocks
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'good');
console.log(hobbies);

const removedElements = hobbies.splice(-4, 3); // negative indicates from reverse
console.log(hobbies);*/

/*const testResults = [1, 3, 5, 21.2, -22, 32];
//const storedResults = testResults.slice(); // Copies and creates a new array for the specified range
const storedResults = testResults.concat([1, 3]); // creates a new array by adding the elements of the passed arrays

testResults.push(10);

console.log(testResults, storedResults);

const personData = [{name:'Max'},{name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'})); //returns -1

const manuel = personData.find( (person,idx,persons) => {
    return person.name = 'Manuel';
});

console.log(manuel);*/

const prices = [10.99, 5.99, 3.2, 2.0];
const tax = 0.19;

/*prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
  taxAdjustedPrice.push(priceObj);
});*/

const taxAdjustedPrice = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
  return priceObj;
});

//console.log(taxAdjustedPrice);

const sortedPrice = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrice);
console.log(sortedPrice.reverse());

const filteredArray = prices.filter((price, idx, prices) => {
  return price > 5;
});

console.log(filteredArray);

const sum = prices.reduce(
  (prevResult, currentResult) => prevResult + currentResult,
  0
);

console.log(sum);

const data = 'newYork;1222;2000';

const transformerData = data.split(';');
console.log(transformerData);

const nameFragments = ['Max', 'pay'];
const fullName = nameFragments.join(' ');
console.log(fullName);

const copiedNameFragments = [...nameFragments];
nameFragments.push('as');
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const nameData = ['Max', 'Schwarz', 'Mr', 30];

const [firstName, lastName, ...otherInfo] = nameData;

console.log(firstName, lastName, otherInfo);
