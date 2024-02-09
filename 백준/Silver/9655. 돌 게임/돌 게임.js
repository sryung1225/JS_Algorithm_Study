const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();
const N = Number(input);

// ------------------------------------------------------------------

const answer = N % 2 === 0 ? "CY" : "SK";
console.log(answer);