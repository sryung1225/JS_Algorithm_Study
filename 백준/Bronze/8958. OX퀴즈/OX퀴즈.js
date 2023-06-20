const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const size = +input[0];
const inputArr = input.slice(1);

solution(size, inputArr);

// ------------------------------------------------------------------

function solution(size, inputArr) {
  inputArr.forEach((str) => {
    let tmp = 0;
    let score = [...str].reduce((acc, cur, idx) => {
      if (cur === "O") {
        acc = acc + ++tmp;
      } else {
        tmp = 0;
      }
      return acc;
    }, 0);
    console.log(score);
  });
}