const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const switches = input.shift().split(" ").map(Number);
const S = Number(input.shift());

// ------------------------------------------------------------------

for (let i = 0; i < S; i++) {
  const [gender, num] = input[i].split(" ").map(Number);
  if (gender === 1) {
    for (let j = num - 1; j < N; j += num) {
      switches[j] = switches[j] === 0 ? 1 : 0;
    }
  } else if (gender === 2) {
    switches[num - 1] = switches[num - 1] === 0 ? 1 : 0;
    for (let z = 1; z <= Math.min(num - 1, N - num); z++) {
      if (switches[num - 1 - z] !== switches[num - 1 + z]) {
        break;
      }
      switches[num - 1 - z] = switches[num - 1 - z] === 0 ? 1 : 0;
      switches[num - 1 + z] = switches[num - 1 + z] === 0 ? 1 : 0;
    }
  }
}
for (let i = 0; i < switches.length; i += 20) {
  console.log(switches.slice(i, i + 20).join(" "));
}