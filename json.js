// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);
// true

json = JSON.stringify(["apple", "banana"]);
console.log(json);
// ["apple","banana"]

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
// ! 함수는 Object에 있는 데이터가 아니기 때문에,
// ! javascript에만 있는 자체 데이터도 포함되지 않는다
json = JSON.stringify(rabbit);
console.log(json);
//"name":"tori","color":"white","size":null,"birthDate":"2020-06-05T05:56:12.645Z"}

// ! 원하는 프로퍼티만
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);
// {"name":"tori"}

// ! 조금 더 세밀한 통제를 하고자 할 때 callback Function
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSOON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
// ! reviver
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // ! Error

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // ! ERROR

// ? 정리
// stringify, parse가 있다
// 함수를 넘겨줄때 유의해라

// 1. JSON Diff
// 서버에 받아온 데이터 첫번째와 두번째 데이터가 뭐가 다른지 모를 때

// 2. JSON beautifier
// 서버에서 받아온 JSON  포멧이 망가졌을 때

// 3. JSON Parser
// JSON 타입을 오브젝트 형식으로 확인하고 싶을 때

// 4. JSON Validator
// 유효한 형식인지 아닌지
