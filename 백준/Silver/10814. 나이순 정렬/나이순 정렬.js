const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1).map((v) => v.trim().split(" "));

solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  inputArr.sort((a, b) => +a[0] - +b[0]);
  inputArr.forEach((v) => {
    console.log(+v[0] + " " + v[1]);
  });
}