function solution(emergency) {
  const sortArray = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map(v => sortArray.indexOf(v)+1);
  return answer;
}