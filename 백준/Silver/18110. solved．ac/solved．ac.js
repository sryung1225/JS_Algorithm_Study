const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = input.shift();

solution(n, input);

// ------------------------------------------------------------------

function solution(n, input) {
  if (n === 0) {
    console.log(0);
  } else {
    const excludeCount = Math.round(n * 0.15);
    input.sort((a, b) => a - b);
    const level = input.slice(excludeCount, n - excludeCount);
    const sum = level.reduce((acc, cur) => acc + cur, 0);
    const answer = Math.round(sum / (n - excludeCount * 2));
    console.log(answer);
  }
}