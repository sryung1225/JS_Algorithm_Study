const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const X = input[1].split(" ").map(Number);

// ------------------------------------------------------------------

// a는 누적되어 점점 양이 많아지는 드링크, b는 가장 적은 양의 드링크여야 최대 양을 만들 수 있다
X.sort((a, b) => b - a);
let a = X.shift();
const count = X.length;
for (let i = 0; i < count; i++) {
  const b = X.pop();
  a += b / 2;
}
console.log(a);