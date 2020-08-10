let min = 10;
let max = 20;

function randomNumber(min, max) {
  let randomNum = Math.floorMath.random() * (min * max + 1) + min;
  return randomNum;
}

////challenge area

let randomGuess = function (guess) {
  let min = 0;
  let max = 5;
  let actualNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(actualNumber);
  console.log(guess);
  return actualNumber === guess;
};

console.log(randomGuess(4));
