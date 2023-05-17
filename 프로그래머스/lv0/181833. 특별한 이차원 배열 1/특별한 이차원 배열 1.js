function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    for(let i=0; i<n; i++){
        answer[i][i] = 1;
    }
    return answer;
}