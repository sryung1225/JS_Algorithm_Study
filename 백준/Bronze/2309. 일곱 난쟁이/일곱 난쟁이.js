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

function shuffle(array) {
  const newArray = [...array].sort(() => Math.random() - 0.5);
  return newArray;
}
let sum = 0;
let newArr = [];
while (sum !== 100) {
  newArr = shuffle(input).slice(0, 7);
  sum = newArr.reduce((acc, cur) => acc + cur, 0);
}
newArr.sort((a, b) => a - b);
console.log(newArr.join("\n"));