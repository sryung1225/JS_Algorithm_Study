function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
// 정규표현식 패턴 중 \D : 숫자가 아닌 것
// 정규표현식 패턴 중 + : 1개 이상 다수 반복 => 이어서 탐색 가능하도록
// “1a2b3c4d123Z".split(/\D+/) => [”1”, “2”, “3”, “4”, “123”]