//Sets
const ids = new Set(['Hi', 'From', 'Set!']);
console.log(ids);
ids.add(2);
if (ids.has('Hi')) {
  ids.delete('Hi');
}

for (const entry of ids.entries()) {
  console.log(entry);
}

//Maps

const person1 = { name: 'Max' };
const person2 = { name: 'manuel' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

//weak set
let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

//..some operation
//person = null;

console.log(persons);

//Weak Map

WeakMapdata = new WeakMap();
WeakMapdata.set(person, 'sas');

person = null;

console.log(WeakMapdata);
