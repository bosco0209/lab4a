// Q1: Interactive Text Changer
// 1) Select the paragraph and button using DOM selection methods
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// 2) Define a function named changeMessage() that replaces the paragraph text
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// 3) Attach the function to the button using addEventListener
changeButton.addEventListener("click", changeMessage);