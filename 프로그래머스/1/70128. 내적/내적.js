function solution(a, b) {
    let answer = a.reduce((acc, cur, idx) => acc + cur*b[idx], 0);
    return answer;
}