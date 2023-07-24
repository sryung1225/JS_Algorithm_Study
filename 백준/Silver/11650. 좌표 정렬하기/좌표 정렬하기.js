const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1);

solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  inputArr.sort((a, b) => {
    a = a.split(" ").map((v) => +v);
    b = b.split(" ").map((v) => +v);

    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(inputArr.join("\n"));
}