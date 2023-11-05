const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const [a, b] = input.map((v) => +v);

solution(a, b);

// ------------------------------------------------------------------

function solution(num1, num2) {
  if (num1 > num2) {
    console.log(">");
  } else if (num1 < num2) {
    console.log("<");
  } else {
    console.log("==");
  }
}
