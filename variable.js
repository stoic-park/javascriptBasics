// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = "global name";

{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var ( don't ever use this!)
// 왜 쓰면 안돼냐
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age); // 블럭이 의미가 없다

// 3. Constan, r(only Read)
// use const whenever possible.
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e, object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; //decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

// number - speicial numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brenden = "brenden";
const greeting = "hello" + brenden;
console.log(`value : ${greeting}, type: ${typeof greeting}`);

// boolean
// false : 0, null, undefined, NaN , ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothings}, type: ${typeof nothings}`);

// undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}, type: ${typeof text}`); // 75, string
text = "8" / "2";
console.log(`value : ${text}, type: ${typeof text}`); // 4, number
console.log(text.charAt(0)); // runtime error => typescript가 나온 이유
