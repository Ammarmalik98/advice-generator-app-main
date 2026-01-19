// Selecting DOM elements
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const button = document.getElementById("generate-btn");


// Function to fetch advice from API
async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache"
    });

    const data = await response.json();

    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = "Oops. Wisdom is offline. Try again.";
    console.error(error);
  }
}

// Event listener for button click
button.addEventListener("click", getAdvice);

// Fetch initial advice on page load
getAdvice();