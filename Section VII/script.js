"Use strict";

/*
console.log(document.querySelector(".message").textContent);


document.querySelector(".number").textContent = 14;
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Handeling click events

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔";
  } // when player wins the game
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // When the guess is to high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "💹 To High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   when the guess is to low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "💹 To low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Coding Challenge #1

/*
Implement a game reset functionality, so that player can make a new guess!
Here it how!

1. select the element with the 'again' class and attach a click event 
handler

2. In the handler function, restore initial values of the score and guess
input field

3. Restore the initial conditions of the message, number, score and guess
input field

4. Also restore the original background color (#222) and number width (15rem)

*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
});
