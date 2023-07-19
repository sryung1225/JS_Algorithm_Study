const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1);

solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  inputArr.sort((a, b) => parseInt(a) - parseInt(b));
  inputArr.forEach((v) => {
    console.log(v);
  });
}