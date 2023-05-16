function solution(n) {
    let answer = new Array(n);
    for(let i=0; i<n; i++){
        answer[i] = new Array(n).fill(0);
        answer[i][i] = 1;
    }
    return answer;
}