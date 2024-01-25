const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// ------------------------------------------------------------------
// 7명 합산이 100이 되는 경우 중 하나 찾기

const sum = input.reduce((acc, cur) => acc + cur, 0);
let array = [...input].sort((a, b) => a - b);
let breakpoint = false;
for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - (array[i] + array[j]) === 100) {
      array = array.filter((_, idx) => idx !== i && idx !== j);
      breakpoint = true;
      break;
    }
  }
  if (breakpoint) break;
}
console.log(array.join("\n"));