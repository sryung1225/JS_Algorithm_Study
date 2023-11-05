const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const num = +input;
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}