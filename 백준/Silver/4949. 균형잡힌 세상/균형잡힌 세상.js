const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

solution(input.slice(0, input.length - 1));

// ------------------------------------------------------------------

function solution(input) {
  const answer = [];
  input.forEach((str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      let v = str[i];
      if (v === "(" || v === "[") {
        stack.push(v);
      } else if (v === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          answer.push("no");
          break;
        }
      } else if (v === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          answer.push("no");
          break;
        }
      }
      if (i === str.length - 1) {
        if (stack.length === 0) {
          answer.push("yes");
        } else {
          answer.push("no");
        }
      }
    }
  });
  console.log(answer.join("\n"));
}