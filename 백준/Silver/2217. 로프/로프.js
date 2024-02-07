const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input.shift();

// ------------------------------------------------------------------

let answer = 0;

input.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  const min = input.shift();
  answer = Math.max(answer, min * (input.length + 1));
}

console.log(answer);