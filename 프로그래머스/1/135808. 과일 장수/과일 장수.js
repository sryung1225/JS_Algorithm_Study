function solution(k, m, score) {
    score.sort((a, b) => b - a);
    const boxCount = Math.floor(score.length / m);
    let answer = 0;
    for(let i=0; i<boxCount; i++){
        answer += score[(i + 1) * m - 1] * m;
    }
    return answer;
}