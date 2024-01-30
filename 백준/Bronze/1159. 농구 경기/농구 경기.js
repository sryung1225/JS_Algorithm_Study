const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();

// ------------------------------------------------------------------

const names = {};
input.forEach((name) => {
  if (!names[name[0]]) {
    names[name[0]] = [];
  }
  names[name[0]].push(name.trim());
});

const answer = [];
Object.values(names).forEach((arr) => {
  if (arr.length >= 5) {
    answer.push(arr[0][0]);
  }
});
console.log(answer.length !== 0 ? answer.sort().join("") : "PREDAJA");