const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];
const inputArr = input.slice(1).map((v) => v.split(" "));
solution(T, inputArr);

// ------------------------------------------------------------------

function solution(T, inputArr) {
  for (let i = 0; i < T; i++) {
    const num = +inputArr[i][0];
    const str = inputArr[i][1].trim();
    let answer = [...str].map((v) => (v = v.repeat(num))).join("");
    console.log(answer);
  }
}