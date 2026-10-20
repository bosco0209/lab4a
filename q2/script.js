// Q2: Smart Number Validator
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

// Define checkInput() using if...else if...else
function checkInput() {
  const rawValue = userInput.value;

  // 1) Handle empty or whitespace-only values as invalid
  if (rawValue.trim() === "") {
    resultParagraph.textContent = "Please enter a valid number!";
    return;
  }

  // 2) Convert a valid numeric string to a number (Number converts "abc" to NaN)
  const numericValue = Number(rawValue.trim());

  // Detect invalid values (NaN). Note: Number("") = 0, so the empty check above is essential.
  if (Number.isNaN(numericValue)) {
    resultParagraph.textContent = "Please enter a valid number!";
  } else if (numericValue < 10) {
    // 3) Display correct message
    resultParagraph.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultParagraph.textContent = "The number is higher than 10";
  } else {
    // Equal to 10 (also covers 10.0)
    resultParagraph.textContent = "The number is equal to 10";
  }
}

// 4) Register the click event with addEventListener
checkBtn.addEventListener("click", checkInput);