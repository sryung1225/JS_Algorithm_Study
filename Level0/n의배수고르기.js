function solution(n, numlist) {
  let answer = [];
  for(let i of numlist){
    if(i % n === 0){
      answer.push(i);
    }
  }
  return answer;
}

// 다른 풀이 : filter이용해서 배열 새로 고치기
// function solution(n, numlist) {
//   return numlist.filter(num => num % n === 0);
// }