function solution(my_string, letter) {
  let answer = [];
  let array = [...my_string];
  for (let i of array){
    if(i !== letter){
      answer.push(i);
    }
  }
  return answer.join("");
}

// 더 좋은 풀이 : 틀에 박힌 split 사용법 벗어나기
// function solution(my_string, letter) {
//   const answer = my_string.split(letter).join('')
//   return answer;
// }