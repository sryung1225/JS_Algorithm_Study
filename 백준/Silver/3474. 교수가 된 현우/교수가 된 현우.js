const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
const N = input.slice(1).map(Number);

// ------------------------------------------------------------------

// 오른쪽 끝 0의 갯수 찾기 = 포함된 10의 갯수 찾기
// 1 -> num 중에서 5를 포함하는 수의 갯수 세기

function calc(num) {
  let count = 0;
  for (let i = 5; Math.floor(num / i) >= 1; i *= 5) {
    count += Math.floor(num / i);
  }
  return count;
}

let answer = [];
N.forEach((num) => {
  const count = calc(num);
  answer.push(count);
});
console.log(answer.join("\n"));