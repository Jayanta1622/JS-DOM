const testText = document.getElementById("test-text").textContent.split(" ");
const userInput = document.getElementById("user-input");
const startButton = document.getElementById("start-button");
const Restart = document.getElementById("Restart");
const resultsContainer = document.getElementById("results-container");
let startTime, endTime;

startButton.addEventListener("click", startTest);
Restart.addEventListener("click", restartTest);
userInput.addEventListener("keydown", checkInput);
userInput.addEventListener("keyup", checkInput);

function startTest() {
  Restart.style.display = "inline";
  userInput.value = "";
  startButton.style.display = "none";
  userInput.style.display = "block";
  userInput.focus();
  startTime = Date.now();
}
function restartTest() {
  startButton.style.display = "inline";
  userInput.value = "";
  Restart.style.display = "none";
}
function checkInput() {
  const enteredText = userInput.value.split(" ");
  const enteredLength = enteredText.length;
  const testLength = testText.length;
  let errorCount = 0;

  for (let i = 0; i < enteredLength; i++) {
    if (enteredText[i] !== testText[i]) {
      errorCount++;
    }
  }

  if (enteredLength === testLength) {
    endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000;
    const wpm = Math.round((testLength / 5 / elapsedTime) * 60);
    const accuracy = Math.round(((testLength - errorCount) / testLength) * 100);
    resultsContainer.innerHTML = `<p>WPM: ${wpm}</p><p>Accuracy: ${accuracy}%</p>`;
  }
}
