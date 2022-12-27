function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i of vowel){
      my_string = my_string.split(i).join("");
  }
  return my_string;
}

// 다른 풀이 : 정규표현식
// function solution(my_string) {
//   return my_string.replace(/[aeiou]/g, '');
// }