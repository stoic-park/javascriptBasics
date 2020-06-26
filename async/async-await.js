// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
// do network request in 10 sec...
//   return "ellie";
//   return new Promise((resolve, reject) => {
// do network request in 10 sec...
// ! pending 상태
// return "ellie";
//     resolve("ellie");
//   });
// }

// : async 적용
async function fetchUser() {
  // do network request in 10 sec...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 🌟
// async가 붙은 함수에서만 사용 가능
// 기다려!
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// promise 라면...
// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

// : callback hell
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log);

async function pickFruits() {
  //   const apple = await getApple();
  //   const banana = await getBanana();

  // 순차적으로 진행되기 때문에 1초, 1초 비효율적이다
  // 그래서 프로미스를 만들어서
  // 그런데...
  // 보기 좋지 않아 그래서.. using Promise APIs
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // 다 기다려줌
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  // 가장 먼저 하나
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
