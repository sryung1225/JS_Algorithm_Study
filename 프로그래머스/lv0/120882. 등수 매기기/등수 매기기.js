function solution(score) {
    // 평균 점수를 기준으로 나누지만
    // 모두 두 과목이기 때문에 굳이 /2 없이 + 하는것으로도 비교 가능
    
    let arr = [...score] // 얕복(sort로 정렬되는 것 방지)
                 .sort((a, b) => b[0]+b[1] - (a[0]+a[1])) // 더한값 큰 순으로 정렬 (내림차순)
                 .map(x => x[0] + x[1]); // 더한값으로 배열 내용 변경
    // console.log(arr);
    
    let answer = score.map(x => arr.indexOf(x[0]+x[1]) + 1);
    return answer;
}