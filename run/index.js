const fs = require("fs");
const input = fs.readFileSync("run/input.txt").toString().split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(" ").map((v) => +v);
  let newArr = [];
  for (let j = 1; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

solution(inputC, inputTestCase);

// ------------------------------------------------------------------

function solution(C, inputTestCase) {
  console.log("hello world");
}
