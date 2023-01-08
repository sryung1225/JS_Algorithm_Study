const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
  const num = Number(input[0]);
  let output = '';
  for(let i=0; i<num; i++){
    for(let j=0; j<=i; j++){
      output += '*';
    }
    output += '\n';
  }
  console.log(output);
});

// 더 좋은 풀이 : repeat 이용해 반복문 1회로 줄이기
// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   solution(Number(input[0]));
// });

// function solution(n) {
//   for(let i=1; i<n+1; i++) {
//     console.log('*'.repeat(i));
//   }
// }