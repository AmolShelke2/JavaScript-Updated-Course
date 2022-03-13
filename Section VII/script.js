"Use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Handeling click events

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    displayMessage("No Number ⛔");
  } // when player wins the game
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } //when guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "💹 To High" : "💹 To low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game");
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
  displayMessage("Start guessing...");
});
