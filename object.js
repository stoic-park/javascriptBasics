// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with Javascript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key) {
  console.log(obj.key); // ! undefined : key 라는 property 가 들어있지 않다
  console.log(obj[key]); // ellie
}
printValue(ellie, "name"); // ellie
printValue(ellie, "age"); // 4

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
// const person4 = makePerson("ellie", 30);
const person4 = new makePerson("ellie", 30);
console.log(person4);
// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie); // true
console.log("age" in ellie); // true
console.log("random" in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); // {name : "coder", age : "20"}

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3); // {name : "coder", age : "20"}

// Object.assign
const user4 = {};
Object.assign(user4, user);
// or
// const user4 = Object.assign({}, user);
console.log(user4); // {name : "coder", age : "20"}

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}.fruit1.fruit2);
console.log(mixed.color); // ! blue 덮어 쒸움
console.log(mixed.size); // big
