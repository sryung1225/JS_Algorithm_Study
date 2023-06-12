const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const str = input[1].split("");
  let answer = str.reduce((acc, cur) => acc + +cur, 0);
  console.log(answer);
}
