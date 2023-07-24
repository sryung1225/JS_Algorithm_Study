const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1);
solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let queue = [];
  let answer = [];
  inputArr.forEach((v) => {
    v = v.split(" ");
    switch (v[0]) {
      case "push":
        queue.push(+v[1]);
        break;
      case "pop":
        if (queue.length === 0) {
          answer.push(-1);
        } else {
          answer.push(queue.shift());
        }
        break;
      case "size":
        answer.push(queue.length);
        break;
      case "empty":
        if (queue.length === 0) {
          answer.push(1);
        } else {
          answer.push(0);
        }
        break;
      case "front":
        if (queue.length === 0) {
          answer.push(-1);
        } else {
          answer.push(queue[0]);
        }
        break;
      case "back":
        if (queue.length === 0) {
          answer.push(-1);
        } else {
          answer.push(queue[queue.length - 1]);
        }
        break;
    }
  });
  console.log(answer.join("\n"));
}