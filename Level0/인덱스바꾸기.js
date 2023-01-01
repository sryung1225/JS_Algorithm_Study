function solution(my_string, num1, num2) {
  let answer = [...my_string];
  answer[num1] = my_string[num2];
  answer[num2] = my_string[num1];
  return answer.join("");
}

// 다른 풀이 : 구조 분해 할당 이용 가능
// [answer[num1], answer[num2]] = [answer[num2], answer[1]];