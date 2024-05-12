const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    // console.log("Async task is compelete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  //   console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Async task resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "azizul", email: "some@example.com" });
  }, 1000);
});
// promiseThree.then((user) => console.log(user));

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({ username: "azizul", pass: "123" });
    } else {
      reject("Error : Get a error");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => console.log(username))
  .catch((error) => console.log(error));

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));
