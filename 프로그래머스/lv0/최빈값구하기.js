function solution(array) {
  //배열 크기가 1개인 경우 종료
  if(array.length === 1) {
    return  array[0];
  }

  //ex) array = [4,1,3,3,2,4,3]

  //오름차순 정렬
  array.sort((a, b) => a - b);
  //ex) array = [1,2,3,3,3,4,4]

  //각 수의 중복갯수 확인 후 [값, 중복갯수]
  let cnt = [];
  let tmp = 1;
  for(let i=0; i<array.length; i++){
    if(array[i] === array[i+1]){
      tmp += 1;
    } else {
      cnt.push([array[i], tmp]);
      tmp = 1;
    }
  }
  //ex) cnt = [[1,1],[2,1],[3,3],[4,2]]
  //중복갯수 내림차순 배열
  cnt.sort((a, b) => b[1] - a[1]);
  //ex) cnt = [[3,3],[4,2],[1,1],[2,1]]

  // 최빈값이 다수라면 -1
  let answer = 0;
  if(cnt.length !== 1 && cnt[0][1] === cnt[1][1]) {
    answer = -1;
  }
  else {
    answer = cnt[0][0];
  }
  return answer;
}