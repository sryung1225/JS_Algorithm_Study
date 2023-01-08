function solution(strlist) {
  let answer = [];
  for (let i of strlist){
    answer.push(i.length);
  }
  return answer;
}

// 다른 풀이 : map으로 간결하게 계산
// function solution(strlist) {
//   return strlist.map((el) => el.length);
// }