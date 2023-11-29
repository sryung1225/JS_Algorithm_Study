const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const [N, M, S] = input.map((v) => (isNaN(+v) ? v : parseInt(v, 10)));
  let pattern = 0; // 현재 연속된 "IOI" 개수를 추적
  let answer = 0;
  for (let i = 0; i < M - 2; i++) {
    if (S.slice(i, i + 3) === "IOI") {
      pattern++;
      if (pattern === N) {
        answer++;
        pattern--;
      }
      i++;
    } else {
      pattern = 0;
    }
  }
  console.log(answer);
}