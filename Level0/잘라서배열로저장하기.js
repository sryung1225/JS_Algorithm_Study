function solution(my_str, n) {
  let arr = my_str.split("");
  let answer = [];
  while(arr.length > 0){
    answer.push(arr.splice(0, n).join(""));
  }
  return answer;
}

// 다른 풀이
// function solution(my_str, n) {
//   return my_str.match(new RegExp(`.{1, ${n}}`, "g"));
// }