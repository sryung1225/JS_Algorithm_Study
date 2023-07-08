const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
solution(input);

// ------------------------------------------------------------------

function solution(input) {
  for (let i = 0; i < input.length - 1; i++) {
    let leng = input[i]
      .trim()
      .split(" ")
      .map((n) => +n);
    leng.sort((a, b) => a - b);
    if (Math.pow(leng[0], 2) + Math.pow(leng[1], 2) === Math.pow(leng[2], 2)) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
}
