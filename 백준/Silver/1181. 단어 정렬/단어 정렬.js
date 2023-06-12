const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.slice(1);
solution(inputArr);

// ------------------------------------------------------------------

function solution(inputArr) {
  inputArr.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else if (a.length === b.length && a > b) {
      return 1;
    } else if (a.length === b.length && a < b) {
      return -1;
    }
  });
  let answer = [...new Set(inputArr)];
  answer.forEach((v) => {
    console.log(v);
  });
}