const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B, C] = input.shift().split(" ").map(Number);

// ------------------------------------------------------------------

let park = new Array(101).fill(0);
input.forEach((car) => {
  const [start, end] = car.split(" ").map(Number);
  for (let i = start; i < end; i++) {
    park[i]++;
  }
});
park = park.filter((time) => time !== 0);

let answer = 0;
park.forEach((time) => {
  switch (time) {
    case 1:
      answer += A * 1;
      break;
    case 2:
      answer += B * 2;
      break;
    case 3:
      answer += C * 3;
      break;
    default:
      break;
  }
});
console.log(answer);