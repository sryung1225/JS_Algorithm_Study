function solution(numbers, direction) {
  let answer = [];
  if(direction === "left"){
    answer = numbers.slice(1, numbers.length);
    answer.push(numbers[0]);
  } else if (direction === "right"){
    answer.push(numbers[numbers.length - 1]);
    answer.push((numbers.slice(0, numbers.length - 1)).split(""));
  }
  return answer;
}

// 더 좋은 풀이 : shfit/unshift 활용하기
// function solution(numbers, direction) {
//   let answer = [];
//   if(direction === "left"){
//      numbers.push(numbers.shift());
//   } else if (direction === "right"){
//     numbers.unshift(numbers.pop());
//   }
//   return numbers;
// }