function solution(score) {
    let avgArr = score.map(v => (v[0]+v[1])/2); // 평균값 배열
    let sortArr = [...avgArr].sort((a,b) => b-a); // (avgArr 복제 후) 평균값을 내림차순 정렬한 배열
    
    // sortArr와 같은 값을 찾으면 그 위치+1
    // (indexOf는 중복값이 있어도 첫번째 등장한 값만을 찾음 : 중복 해결)
    let answer = avgArr.map(v => sortArr.indexOf(v)+1)    
    return answer;
}