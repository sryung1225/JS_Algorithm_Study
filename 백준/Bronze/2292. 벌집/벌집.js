const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const n = +input;

solution(n);

// ------------------------------------------------------------------

function solution(n) {
  let step = 1;
  let blocks = 1;
  while (blocks < n) {
    blocks += 6 * step++;
  }
  console.log(step);
}