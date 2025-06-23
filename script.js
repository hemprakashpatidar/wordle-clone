const secret = "PLANE";
const board = document.getElementById("game-board");

function makeGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.toUpperCase();
  if (guess.length !== 5) return alert("Enter a 5-letter word.");

  let result = "";
  for (let i = 0; i < 5; i++) {
    if (guess[i] === secret[i]) result += "🟩";
    else if (secret.includes(guess[i])) result += "🟨";
    else result += "⬛";
  }

  const line = document.createElement("div");
  line.textContent = guess + " " + result;
  board.appendChild(line);

  input.value = "";
}
