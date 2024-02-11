const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

// ------------------------------------------------------------------

const condition = [];
for (let i = 0; i < N; i++) {
  let [level, health] = input[i].split(" ");
  health = Number(health);
  condition.push([level, health]);
}

function binarySearch(health, condition) {
  let left = 0;
  let right = N - 1;
  if (health > condition[right][1]) {
    return condition[right][0];
  }
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (condition[mid][1] >= health) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return condition[left][0];
}

const answer = [];
for (let j = N; j < N + M; j++) {
  const health = Number(input[j]);
  let level = binarySearch(health, condition);
  answer.push(level);
}

console.log(answer.join("\n"));