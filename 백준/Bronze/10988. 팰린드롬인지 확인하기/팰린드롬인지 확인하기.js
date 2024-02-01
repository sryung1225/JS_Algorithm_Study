const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// ------------------------------------------------------------------

const reverse = [...input].reverse().join("");
const answer = input === reverse ? 1 : 0;
console.log(answer);