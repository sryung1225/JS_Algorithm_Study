const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = +input;

solution(N);

// ------------------------------------------------------------------

function solution(N) {
  let answer = 0;
  const limit = Math.floor(N / 5);
  for (let i = limit; i >= 0; i--) {
    let remain = N - i * 5;
    if (remain % 3 === 0) {
      answer = i + remain / 3;
      break;
    }
    if (i === 0) {
      answer = -1;
    }
  }
  console.log(answer);
}