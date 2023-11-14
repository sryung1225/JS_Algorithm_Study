const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = parseInt(input.shift(), 10);

solution(N, input);

// ------------------------------------------------------------------

function solution(N, input) {
  const array = input.map((item) => item.split(" ").map(Number));
  array.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else if (a[1] === b[1] && a[0] > b[0]) {
      return 1;
    } else {
      return -1;
    }
  });
  const answer = array.map((item) => item.join(" ")).join("\n");
  console.log(answer);
}