const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// ------------------------------------------------------------------

let answer = input;
answer = answer.replace(/XXXX/g, "AAAA");
answer = answer.replace(/XX/g, "BB");
answer = answer.split("").includes("X") ? -1 : answer;
console.log(answer);