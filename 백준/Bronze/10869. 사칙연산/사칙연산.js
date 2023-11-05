const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const [A, B] = input
  .split(" ")
  .slice(0, 2)
  .map((v) => +v);

solution(A, B);

// ------------------------------------------------------------------

function solution(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B));
  console.log(A % B);
}
