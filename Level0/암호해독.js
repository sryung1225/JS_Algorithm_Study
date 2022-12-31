function solution(cipher, code) {
  let answer = [];
  const array = [...cipher];
  for(let i=code-1; i<=array.length; i+=code){
      answer.push(array[i]);
  }
  return answer.join("");
}

// 더 좋은 풀이 : 굳이 string->array 형변환 하지 않고 string 자체 사용
// function solution(cipher, code) {
//   let answer = "";
//   for(let i=code-1; i<=cipher.length; i+=code){
//       answer += cipher[i];
//   }
//   return answer;
// }