const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = input.shift();

console.log(solution(n, input));

// ------------------------------------------------------------------

function solution(n, input) {
  if (n === 0) {
    return 0;
  }
  const excludeCount = Math.round(n * 0.15);
  const level = [...input]
    .sort((a, b) => a - b)
    .slice(excludeCount, n - excludeCount);
  const answer = Math.round(
    level.reduce((acc, cur) => acc + cur, 0) / (n - excludeCount * 2)
  );
  return answer;
}
