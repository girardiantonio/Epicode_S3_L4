// Array con i numeri della tombola
let numbers = Array.from({ length: 76 }, (_, index) => index + 1);
let drawnNumbers = [];

// Creazione del tabellone
let board = document.getElementById("board");
for (let i = 1; i <= 76; i++) {
  let numberDiv = document.createElement("div");
  numberDiv.className = "board-number";
  numberDiv.textContent = i;
  board.appendChild(numberDiv);
}

// Funzione per estrarre un numero casuale senza ripetizioni
function drawNumber() {
  if (numbers.length === 0) {
    alert("Tutti i numeri sono stati estratti!");
  }

  let randomIndex = Math.floor(Math.random() * numbers.length);
  let number = numbers[randomIndex];
  drawnNumbers.push(number);

  // Rimuovi il numero estratto dall'array
  numbers.splice(randomIndex, 1);

  let numberDiv = document.getElementsByClassName("board-number")[number - 1];
  numberDiv.classList.add("drawn");
}

// Genera numero
let drawButton = document.getElementById("drawButton");
drawButton.addEventListener("click", drawNumber);

// Reset pagina
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetPage);

function resetPage() {
  // Reimposta lo stato della pagina
  numbers = Array.from({ length: 90 }, (_, index) => index + 1);
  drawnNumbers = [];

  let numberDivs = document.getElementsByClassName("board-number");
  for (let i = 0; i < numberDivs.length; i++) {
    numberDivs[i].classList.remove("drawn");
  }
}
