const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  let asc = [...input].sort((a, b) => a - b).join("");
  let des = [...input].sort((a, b) => b - a).join("");
  input = input.join("");

  if (input === asc) {
    console.log("ascending");
  } else if (input === des) {
    console.log("descending");
  } else {
    console.log("mixed");
  }
}