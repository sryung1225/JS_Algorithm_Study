const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

// ------------------------------------------------------------------

let answer = [];

for (let i = 0; i < N; i++) {
  const numbers = input[i].split(/[a-z]/g).filter((v) => v);
  numbers.forEach((num) => {
    answer.push(BigInt(num));
  });
}

answer.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
console.log(answer.join("\n"));
