const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1);

solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  inputArr.forEach((v) => {
    let count = 0;
    for (let i = 0; i < v.length; i++) {
      if (v[i] === "(") count++;
      else if (v[i] === ")") count--;
      if (count < 0) {
        break;
      }
    }
    if (count === 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  });
}