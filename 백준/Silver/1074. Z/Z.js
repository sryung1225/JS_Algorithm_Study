const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const [N, r, c] = input.split(" ").map(Number);

console.log(solution(N, r, c));

// ------------------------------------------------------------------

function solution(N, r, c) {
  if (N === 0) {
    return 0;
  }

  const size = Math.pow(2, N - 1);
  const order = size * size;

  if (r < size && c < size) {
    return solution(N - 1, r, c);
  } else if (r < size && c >= size) {
    return order + solution(N - 1, r, c - size);
  } else if (r >= size && c < size) {
    return 2 * order + solution(N - 1, r - size, c);
  } else {
    return 3 * order + solution(N - 1, r - size, c - size);
  }
}