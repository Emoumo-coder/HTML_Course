// /*============== Promises ===============*/
let dogHasEaten = confirm("Has dog 🐕 eaten ?");

const dogEat = () => {
  return new Promise((resolve, reject) => {
    dogHasEaten
      ? resolve("The dog has eaten Bread 🍞")
      : reject("The dog hasn't eaten");
  });
};

dogEat().then((data) => {
    console.log(data);
    return 4;
})
.then((data) => {
    console.log(data);
    return "The dog hasn't barked yet."
}).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
});