const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();

// ------------------------------------------------------------------
// 암호화 : 13글자 밀기 (A -> N)
// A=65 Z=90 a=97 z=122

let answer = "";
for (let i = 0; i < input.length; i++) {
  let char = input[i].charCodeAt();
  if (char >= 65 && char <= 90) {
    answer += String.fromCharCode(char + 13 > 90 ? char - 13 : char + 13);
  } else if (char >= 97 && char <= 122) {
    answer += String.fromCharCode(char + 13 > 122 ? char - 13 : char + 13);
  } else {
    answer += input[i];
  }
}
console.log(answer);