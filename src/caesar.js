function createMatrixRain() {
  const matrixBg = document.getElementById("matrix-bg");
  const characters = "01matrix ";
  const columns = Math.floor(window.innerWidth / 25);

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.className = "matrix-column";
    column.style.left = i * 25 + "px";
    column.style.animationDuration = Math.random() * 3 + 2 + "s";
    column.style.animationDelay = Math.random() * 2 + "s";

    let text = "";
    for (let j = 0; j < 20; j++) {
      text +=
        characters[Math.floor(Math.random() * characters.length)] + "<br>";
    }
    column.innerHTML = text;

    matrixBg.appendChild(column);
  }
}

// Initialize matrix rain
createMatrixRain();

// Original Caesar cipher functionality
const form = document.getElementById("controls");
const hInput = document.querySelector("#heading-input");
const hOutput = document.querySelector("#heading-output");
const selectEncodeOrDecode = document.getElementsByName("code");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const shiftKey = document.getElementById("shift-input");

// Update headings and clear fields on encoding/decoding selection
selectEncodeOrDecode.forEach((option) => {
  option.addEventListener("click", () => {
    hInput.textContent = option.value === "encode" ? "Plaintext" : "Ciphertext";
    hOutput.textContent =
      option.value === "encode" ? "Ciphertext" : "Plaintext";
    inputText.value = "";
    outputText.value = "";
  });
});

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputTextValue = inputText.value;
  let selectedOption = Array.from(selectEncodeOrDecode).find(
    (option) => option.checked
  );
  let shiftValue = parseInt(shiftKey.value);

  if (inputTextValue.trim() === "") {
    showError("Please enter a message to encrypt or decrypt.");
    return;
  }

  let cipherOutput = caesarCipher(
    selectedOption.value,
    inputTextValue,
    shiftValue
  );
  outputText.value = cipherOutput;
  hideError();
});

// Caesar cipher function
function caesarCipher(decode, text, shift) {
  if (decode === "decode") shift = 26 - shift;
  let result = "";

  for (let char of text) {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);
      let baseCode = char === char.toUpperCase() ? 65 : 97;
      code = ((code - baseCode + shift) % 26) + baseCode;
      char = String.fromCharCode(code);
    } else if (char.match(/\d/)) {
      char = String.fromCharCode(((char.charCodeAt(0) - 48 + shift) % 10) + 48);
    }
    result += char;
  }
  return result;
}

// Copy functionality
const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", () => {
  outputText.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 2000);
});

// Error handling
const errorMessage = document.getElementById("error-message");
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideError() {
  errorMessage.style.display = "none";
}

// Refresh matrix rain periodically
setInterval(() => {
  const matrixBg = document.getElementById("matrix-bg");
  matrixBg.innerHTML = "";
  createMatrixRain();
}, 10000);
