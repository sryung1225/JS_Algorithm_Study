const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arrA = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
const arrInput = input[3].split(" ").map((v) => +v);

solution(arrA, arrInput);

// ------------------------------------------------------------------

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

function solution(arrA, arrInput) {
  let answer = "";
  arrInput.forEach((v) => {
    if (binarySearch(arrA, v)) {
      answer += "1";
    } else {
      answer += "0";
    }
  });
  console.log(answer.split("").join("\n"));
}