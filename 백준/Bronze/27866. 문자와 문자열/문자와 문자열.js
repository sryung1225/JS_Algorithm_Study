const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const str = input[0];
  const answer = str[input[1] - 1];
  console.log(answer);
}
