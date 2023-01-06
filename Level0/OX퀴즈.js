function solution(quiz) {
  let answer = [];
  for (let i of quiz){
    let arr = i.split(" ");
    if(arr[1] === "+"){
      answer.push(Number(arr[0])+Number(arr[2]) === Number(arr[4]) ? "O" : "X");
    } else if(arr[1] === "-"){
      answer.push(Number(arr[0])-Number(arr[2]) === Number(arr[4]) ? "O" : "X");
    }
  }
  return answer;
}

// 다른 풀이
// function solution(quiz) {
//   let answer = [];
//   return quiz.map(t => {
//     const [calc, result] = t.split(' = ');
//     const sign = calc.includes('+') ? 1 : -1
//     const [a, b] = calc.split(sign === 1 ? " + " : " - ");

//     return +a + (+b * sign) === +result ? "O" : "X"
//   });
// }