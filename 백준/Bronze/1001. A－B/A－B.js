const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const A = input[0];
  const B = input[1];
  console.log(A - B);
}
