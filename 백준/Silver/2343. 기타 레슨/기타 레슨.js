const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const lecture = input[1].split(" ").map(Number);

// ------------------------------------------------------------------

let low = Math.max(...lecture);
let high = lecture.reduce((acc, cur) => acc + cur);
let answer = high;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let cnt = 1;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (sum + lecture[i] <= mid) {
      sum += lecture[i];
    } else {
      cnt++;
      if (cnt > M) break;
      sum = lecture[i];
    }
  }
  if (cnt <= M) {
    answer = Math.min(answer, mid);
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

console.log(answer);
