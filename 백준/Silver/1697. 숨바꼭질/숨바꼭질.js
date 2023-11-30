const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [N, K] = input.map(Number);

console.log(solution(N, K));

// ------------------------------------------------------------------

function solution(N, K) {
  if (N === K) {
    return 0;
  }
  let queue = [N];
  let floor = 1;
  let floorCount = queue.length;
  const visited = new Set([N]);

  while (queue.length > 0) {
    let num = queue.shift();
    let [minus, plus, double] = [num - 1, num + 1, num * 2];
    for (let next of [minus, plus, double]) {
      if (next === K) {
        return floor;
      }
      if (next >= 0 && next <= 100000 && !visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
    floorCount--;
    if (floorCount === 0) {
      floor++;
      floorCount = queue.length;
    }
  }
  return floor;
}
