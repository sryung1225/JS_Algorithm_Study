const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  for (let i = 0; i < input.length - 1; i++) {
    const [num1, num2] = input[i].split(" ").map(Number);
    console.log(num1 + num2);
  }
}