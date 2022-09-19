const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([3, 2, 1]);
    reject("Error");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success!", result);
  })
  .catch((e) => {
    console.log("Wrong!", e);
  });
