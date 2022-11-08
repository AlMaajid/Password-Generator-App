const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

const generateBtn = document.querySelector('.generate-btn');
const resultOneEl = document.getElementById('resultOne');
const resultTwoEl = document.getElementById('resultTwo');


function display() {
  let totalLength = 0;
  let resultOne = [];
  let resultTwo = [];
  for (let i = 0; i < characters.length; i++) {
    if (totalLength < 15) {
      let firstNum = Math.floor(Math.random() * characters.length);
      let secondNum = Math.floor(Math.random() * characters.length);
      resultOne.push(characters[firstNum]);
      resultTwo.push(characters[secondNum]);
      totalLength++;
    }
  }
  resultOneEl.value = resultOne.join('');
  resultTwoEl.value = resultTwo.join('');
}

function copyOne() {
  resultOneEl.select();
  resultOneEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(resultOneEl.value);
  alert('Copied the Text: ' + resultOneEl.value);
}

function copyTwo() {
  resultTwoEl.select();
  resultTwoEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(resultTwoEl.value);
  alert('Copied the Text: ' + resultTwoEl.value);
}

generateBtn.addEventListener('click', display);