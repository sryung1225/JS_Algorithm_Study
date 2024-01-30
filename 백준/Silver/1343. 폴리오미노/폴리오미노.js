const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// ------------------------------------------------------------------

function transfer(arr) {
  if (arr.length % 2 !== 0) return -1;
  let result = "";
  result += "AAAA".repeat(Math.floor(arr.length / 4));
  if (arr.length % 4 === 2) result += "BB";
  return result;
}

let answer = "";
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "X") {
    stack.push(input[i]);
  } else if (input[i] === ".") {
    const temp = transfer(stack);
    if (temp === -1) {
      answer = -1;
      break;
    }
    answer += temp;
    stack = [];
    answer += ".";
  }
}

if (answer !== -1 && stack.length !== 0) {
  const temp = transfer(stack);
  if (temp === -1) {
    answer = -1;
  } else {
    answer += temp;
  }
}

console.log(answer);