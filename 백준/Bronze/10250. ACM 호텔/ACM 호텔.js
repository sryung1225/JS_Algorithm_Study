const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];
const inputArr = input.slice(1).map((v) => v.split(" "));
solution(T, inputArr);

// ------------------------------------------------------------------

function solution(T, inputArr) {
  for (let i = 0; i < T; i++) {
    const [H, W, N] = inputArr[i].map((v) => +v);
    let floor = N % H ? N % H : H;
    let number = Math.floor((N - 1) / H) + 1;
    if (number < 10) {
      number = "0" + number.toString();
    } else {
      number = number.toString();
    }
    console.log(floor + number);
  }
}
