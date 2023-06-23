const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map((v) => +v);

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  let multiple = String(input.reduce((acc, cur) => acc * cur, 1));
  const count = {};
  for (let i = 0; i < multiple.length; i++) {
    let num = +multiple[i];
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  for (let i = 0; i <= 9; i++) {
    console.log(count[i] ? count[i] : 0);
  }
}