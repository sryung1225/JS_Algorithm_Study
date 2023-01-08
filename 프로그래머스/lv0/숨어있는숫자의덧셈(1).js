function solution(my_string) {
  let string = my_string.match(/[0-9]/g);
  let answer = 0;
  for (let i of string){
    answer += parseInt(i);
  }
  return answer;
}

// 더 좋은 풀이 : reduce 결합
// function solution(my_string) {
//   return my_string.match(/[0-9]/g).reduce((a, b) => parseInt(a)+parseInt(b), 0);
// }