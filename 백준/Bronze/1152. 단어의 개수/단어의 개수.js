const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  let answer = input.filter((v) => v).length;
  console.log(answer);
}