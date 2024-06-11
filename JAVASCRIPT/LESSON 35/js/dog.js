export function dog () {
    let dogHasEaten = confirm("Has dog 🐕 eaten ?");

const dogEat = () => {
  return new Promise((resolve, reject) => {
    dogHasEaten
      ? resolve("The dog has eaten Bread 🍞")
      : reject("The dog hasn't eaten");
  });
};

const walkDog = () => {
  let haveWalkedDog = confirm("Have you taken the dog 🐕 to walk 🚶‍♀️ ?");

  return new Promise((resolve, reject) => {
    haveWalkedDog
      ? resolve("I have walked the dog 🐕 through a long street 🚥")
      : reject("It hasn't been taken to walk 🚶‍♀️");
  });
};

dogEat()
  .then((data) => {
    console.log(data);
    return 4;
  })
  .then((data) => {
    console.log(data);
    return "The dog hasn't barked yet.";
  })
  .then((data) => {
    console.log(data);
    walkDog()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    console.error(error);
  });

console.log("This is running an app concerning dog chores");
}