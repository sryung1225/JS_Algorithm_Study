const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

// ------------------------------------------------------------------

const pillars = [];
let minWidth = 0;
let maxWidth = 0;
input.forEach((pillar) => {
  const [L, H] = pillar.split(" ").map(Number);
  pillars.push([L, H]);
  minWidth = Math.min(minWidth, L);
  maxWidth = Math.max(maxWidth, L);
});
pillars.sort((a, b) => b[1] - a[1]);

const region = new Array(maxWidth).fill(0);
const center = pillars[0][0];
region[center] = pillars[0][1];
let [L, R] = [center, center];

for (let i = 1; i < N; i++) {
  const [pos, height] = pillars[i];
  if (pos > L && pos < R) continue;
  else if (pos < L) {
    for (let j = pos; j < L; j++) {
      region[j] = height;
    }
    L = pos;
  } else if (pos > R) {
    for (let j = R + 1; j <= pos; j++) {
      region[j] = height;
    }
    R = pos;
  }
}

const answer = region.reduce((acc, cur) => acc + cur);
console.log(answer);
