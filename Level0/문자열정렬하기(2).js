function solution(my_string) {
  let answer = my_string.toLowerCase().split("").sort().join("");
  return answer;
}