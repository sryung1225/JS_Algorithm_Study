const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const [N, M, S] = input.map((v) => (isNaN(+v) ? v : parseInt(v, 10)));
  const P = "I" + "OI".repeat(N);

  let answer = 0;
  for (let j = 0; j <= M - P.length; j++) {
    const tmp = S.slice(j, j + P.length);
    if (tmp === P) {
      answer++;
    }
  }
  console.log(answer);
}
