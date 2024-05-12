const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "js", password: "123" });
    } else {
      reject("ERROR: Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    u; // console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();
