const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

solution(N, X, A);

// ------------------------------------------------------------------

function solution(N, X, A) {
  const answer = A.filter((v) => v < X);
  console.log(answer.join(" "));
}