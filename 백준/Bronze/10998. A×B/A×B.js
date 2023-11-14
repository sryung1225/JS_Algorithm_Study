const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const [A, B] = input.split(" ").map(Number);

solution(A, B);

// ------------------------------------------------------------------

function solution(A, B) {
  console.log(A * B);
}