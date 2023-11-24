const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const cases = parseInt(input.shift(), 10);

solution(cases, input);

// ------------------------------------------------------------------

function solution(cases, input) {
  const answer = [];
  for (let i = 0; i < cases; i++) {
    const n = parseInt(input[0]);
    const arr = input.slice(1, 1 + n);
    const sorts = {};
    arr.map((clothes) => {
      const sort = clothes.split(" ")[1];
      if (!sorts[sort]) {
        sorts[sort] = 1;
      } else {
        sorts[sort] += 1;
      }
    });
    answer.push(
      Object.values(sorts).reduce((acc, cur) => acc * (cur + 1), 1) - 1
    );
    input = [...input].slice(1 + n);
  }
  console.log(answer.join("\n"));
}
