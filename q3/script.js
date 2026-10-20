// Q3: Dynamic Number Generator
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // 4) Clear existing items before generating again (prevents duplicates)
  numberList.textContent = ""; // safe way to remove all child nodes

  // 2) for loop from 1 through 5
  for (let i = 1; i <= 5; i++) {
    // 3) Create <li>, set textContent, append
    const listItem = document.createElement("li");
    listItem.textContent = "The number is " + i;
    numberList.appendChild(listItem);
  }
}

// 1) Attach function to button with addEventListener
generateBtn.addEventListener("click", generateNumbers);