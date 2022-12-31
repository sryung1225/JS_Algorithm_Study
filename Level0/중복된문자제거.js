function solution(my_string) {
  let answer = [];
  let my_array = [...my_string];
  for(let i=0; i<my_array.length; i++){
    answer.push(my_array[i]); // answer에 첫글자 퉤
    let originL = my_array.length; // 원래 문장길이
    my_array = my_array.filter(v => v !== my_array[i]); // 중복글자 제거
    i -= originL - my_array.length; // 제거된 만큼 문장 길이 잘라서 0부터 시작하도록
  }
  return answer.join("");
}

// 더 좋은 풀이 : Set을 이용한 중복값 제거
function solution(my_string) {
  let set = new Set(my_string); // string -> set 변환 : 중복값 제거
  let answer = [...set].join(""); // set -> array -> string 변환
  return answer;
}