const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => (v = v.trim()));
const inputArr = input.slice(0, input.length - 1);

solution(inputArr);

// ------------------------------------------------------------------

function solution(inputArr) {
  inputArr.forEach((v) => {
    let rev = [...v].reverse().join("");
    if (v === rev) {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
}