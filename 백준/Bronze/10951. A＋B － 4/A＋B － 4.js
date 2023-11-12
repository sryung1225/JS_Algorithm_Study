const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  input.forEach((v) => {
    const [num1, num2] = v.split(" ").map(Number);
    console.log(num1 + num2);
  });
}
