function solution(array, n) {
  array.sort((a, b) => a - b); // 가장 가까운 수가 여러 개일 경우 대비용 오름차순 정렬
  let gap = array.map(v => Math.abs(n-v)); // |array-n| 배열 
  let answer = array[gap.indexOf(Math.min(...gap))];
  return answer;
}