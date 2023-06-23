const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((v) => +v);

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  let multiple = input.reduce((acc, cur) => acc * cur, 1).toString().split("").map((v) => +v);
  const count = {};
  multiple.forEach((v) => {
    count[v] = count[v] ? count[v] + 1 : 1;
  });
  for (let i = 0; i <= 9; i++) {
    console.log(count[i] ? count[i] : 0);
  }
}