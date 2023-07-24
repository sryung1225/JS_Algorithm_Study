const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1);
solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let deque = [];
  let answer = [];
  inputArr.forEach((v) => {
    v = v.split(" ");
    switch (v[0]) {
      case "push_front":
        deque.unshift(+v[1]);
        break;
      case "push_back":
        deque.push(+v[1]);
        break;
      case "pop_front":
        if (deque.length === 0) {
          answer.push(-1);
        } else {
          answer.push(deque.shift());
        }
        break;
      case "pop_back":
        if (deque.length === 0) {
          answer.push(-1);
        } else {
          answer.push(deque.pop());
        }
        break;
      case "size":
        answer.push(deque.length);
        break;
      case "empty":
        if (deque.length === 0) {
          answer.push(1);
        } else {
          answer.push(0);
        }
        break;
      case "front":
        if (deque.length === 0) {
          answer.push(-1);
        } else {
          answer.push(deque[0]);
        }
        break;
      case "back":
        if (deque.length === 0) {
          answer.push(-1);
        } else {
          answer.push(deque[deque.length - 1]);
        }
        break;
    }
  });
  console.log(answer.join("\n"));
}