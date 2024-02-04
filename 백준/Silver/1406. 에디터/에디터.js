const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const firstStr = input.shift();
const N = Number(input.shift());

// ------------------------------------------------------------------

const leftStack = firstStr.split("");
const rightStack = [];

for (let i = 0; i < N; i++) {
  const [cmd, char] = input[i].split(" ");
  switch (cmd) {
    case "L":
      if (leftStack.length) rightStack.push(leftStack.pop());
      break;
    case "D":
      if (rightStack.length) leftStack.push(rightStack.pop());
      break;
    case "B":
      if (leftStack.length) leftStack.pop();
      break;
    case "P":
      leftStack.push(char);
  }
}

const answer = leftStack.join("") + rightStack.reverse().join("");
console.log(answer);