function solution(N, stages) {
    const status = new Array(N+1).fill(0);
    stages.forEach((stage) => {
        for(let i=0; i<stage; i++){
            status[i]++;
        }
    })
    let failRate = new Array(N).fill(0);
    failRate = failRate.map((v, i) => {
        const fails = (status[i] - status[i+1]) / status[i];
        return [fails, i];
    })
    failRate.sort((a, b) => b[0] - a[0]);
    const answer = failRate.map((v) => v[1] + 1);
    return answer;
}