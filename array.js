// javascript === diynamically typed language

"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // first thing
console.log(fruits[fruits.length - 1]); // last thing

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. forEach
fruits.forEach(function (frunt, index) {
  console.log(fruit, index);
}); // callbackfn , thisArg?
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//! note!! shift, unshift are slower than pop, push
// 배열의 길이가 길수록...
// splice : remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
// fruits.splice(1); //
// console.log(fruits); //? 1부터 다 지움
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥜"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));

// includes
console.log(fruits.includes("🍎")); // boolean :

//? lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 첫번째 사과
console.log(fruits.lastIndexOf("🍎")); // 마지막 사과

// 숙제 Reading
