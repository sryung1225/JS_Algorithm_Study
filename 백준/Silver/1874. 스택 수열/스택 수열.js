const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
const n = input[0];
const inputArr = input.slice(1);
solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let stack = [];
  let tmp = 1;
  let answer = "";
  for (let i = 0; i < n; i++) {
    const num = inputArr[i];
    while (tmp <= num) {
      stack.push(tmp);
      tmp++;
      answer += "+ ";
    }
    let poped = stack.pop();
    answer += "- ";

    if (poped !== num) {
      answer = "NO";
      break;
    }
  }
  console.log(answer.split(" ").join("\n"));
}