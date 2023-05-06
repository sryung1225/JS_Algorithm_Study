function solution(N, stages) {
    // 스테이지별 도전 플레이어 수
    let status = Array(N+1).fill(0);
    for(let i in stages){
        status[stages[i]-1]++;
    }
    // 전체 플레이어 수
    let countPlayer = status.reduce((acc, cur) => acc += cur, 0);
    // 스테이지별 실패율
    let answer = [];
    for(let i=0; i<status.length-1; i++){
        let tmp = [+i+1, status[i]/countPlayer];
        countPlayer -= status[i];
        answer.push(tmp);
    }
    return answer.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}