function solution(N, stages) {
    let answer = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter(v => v >= i).length; // 전체 플레이어 수
        let curr = stages.filter(v => v === i).length; // 스테이지별 도전 플레이어 수
        answer.push([i, curr/reach]); // 스테이지별 실패율
    }
    return answer.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}