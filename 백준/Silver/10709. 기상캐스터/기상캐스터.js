const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [H, W] = input.shift().split(" ").map(Number);

// ------------------------------------------------------------------

const answer = [];
for (let i = 0; i < H; i++) {
  const answerX = [];
  let posX = -1;
  for (let j = 0; j < W; j++) {
    if (input[i][j] === "c") {
      posX = 0;
    } else if (posX >= 0 && input[i][j] === ".") {
      posX++;
    }
    answerX.push(posX);
  }
  answer.push(answerX.join(" "));
}
console.log(answer.join("\n"));