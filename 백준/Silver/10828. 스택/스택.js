const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1);
solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let stack = [];
  let answer = [];
  inputArr.forEach((v) => {
    v = v.split(" ");
    switch (v[0]) {
      case "push":
        stack.push(+v[1]);
        break;
      case "pop":
        if (stack.length === 0) {
          answer.push(-1);
        } else {
          answer.push(stack.pop());
        }
        break;
      case "size":
        answer.push(stack.length);
        break;
      case "empty":
        if (stack.length === 0) {
          answer.push(1);
        } else {
          answer.push(0);
        }
        break;
      case "top":
        if (stack.length === 0) {
          answer.push(-1);
        } else {
          answer.push(stack[stack.length - 1]);
        }
        break;
    }
  });
  console.log(answer.join("\n"));
}