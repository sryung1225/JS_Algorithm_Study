const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// ------------------------------------------------------------------

function transfer(arr) {
  if (arr.length % 2 === 1) {
    return -1;
  }
  let result = "";
  result += "AAAA".repeat(Math.floor(arr.length / 4));
  result += "BB".repeat(
    arr.length - Math.floor(arr.length / 4) * 4 === 2 ? 1 : 0
  );
  return result;
}

let answer = "";
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "X") {
    stack.push(input[i]);
  } else if (input[i] === ".") {
    if (transfer(stack) === -1) {
      answer = -1;
      break;
    }
    answer += transfer(stack);
    stack = [];
    answer += ".";
  }
}

if (answer !== -1 && stack.length !== 0) {
  let temp = transfer(stack);
  if (temp === -1) {
    answer = -1;
  } else {
    answer += transfer(temp);
  }
}

console.log(answer);
