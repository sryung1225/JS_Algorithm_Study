const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

// ------------------------------------------------------------------

const keywords = new Set();
for (let i = 0; i < N; i++) {
  keywords.add(input[i]);
}

const answer = [];
for (let j = N; j < N + M; j++) {
  const words = input[j].split(",");
  words.forEach((v) => {
    keywords.delete(v);
  });
  answer.push(keywords.size);
}

console.log(answer.join("\n"));