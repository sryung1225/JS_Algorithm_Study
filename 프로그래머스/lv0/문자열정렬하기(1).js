function solution(my_string) {
  // 정규표현식을 이용해 숫자 추출한 뒤 오름차순 정렬
  let numString = my_string.match(/[0-9]/g).sort((a,b) => a-b);
  // 배열 속 문자열를 숫자로 변환
  let answer = [];
  for (let i of numString){
      answer.push(parseInt(i));
  }
  return answer;
}

// 더 좋은 풀이 : map 망각
// function solution(my_string) {
//   return my_string.match(/[0-9]/g).sort((a,b) => a-b).map(n => Number(n));
// }