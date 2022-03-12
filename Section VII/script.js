"Use strict";

/*
console.log(document.querySelector(".message").textContent);


document.querySelector(".number").textContent = 14;
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);

*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

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
      document.querySelector(".message").textContent = "💹 To High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
