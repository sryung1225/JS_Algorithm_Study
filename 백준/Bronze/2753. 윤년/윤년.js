const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = parseInt(input, 10);

solution(N);

// ------------------------------------------------------------------

function solution(N) {
  let answer = 0;
  if (N % 4 === 0 && N % 100 !== 0) {
    answer = 1;
  } else if (N % 400 === 0) {
    answer = 1;
  }
  console.log(answer);
}
