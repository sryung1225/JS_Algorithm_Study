const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = parseInt(input.shift(), 10);

solution(N, input);

// ------------------------------------------------------------------

function solution(N, input) {
  const people = input.map((line) => line.split(" ").map(Number));
  const result = [];

  for (let i = 0; i < N; i++) {
    let rank = 1;

    for (let j = 0; j < N; j++) {
      if (i !== j && people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        rank++;
      }
    }

    result.push(rank);
  }

  console.log(result.join(" "));
}
