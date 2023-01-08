function solution(my_string, n) {
  const array = [...my_string];
  let string = [];
  for(let i of array){
    for(let j=0; j<n; j++){
      string.push(i);
    }
  }
  const answer = string.join("");
  return answer;
}

// 더 좋은 풀이 : 불필요한 구문 줄이기
// function solution(my_string, n) {
//   let answer = '';
//   for (let i of my_string) answer+=i.repeat(n);
//   return answer;
// }

// 더 좋은 풀이 : map + repeat
// function solution(my_string, n) {
//   let answer = [...my_string].map(v => v.repeat(n)).join("");
//   return answer;
// }