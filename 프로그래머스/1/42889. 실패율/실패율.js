function solution(N, stages) {
    let staging = new Array(N+1).fill(0);
    stages.forEach((where) => {
        staging[where-1]++;
    })
    
    let passed = stages.length;
    const failRate = staging.map((user, index) => {
        const rate = user / passed;
        passed -= user;
        return [rate, index+1];
    }).slice(0, N);
    failRate.sort((a, b) => b[0] - a[0]);
    
    let answer = failRate.map((rate) => rate[1]);
    return answer;
}
