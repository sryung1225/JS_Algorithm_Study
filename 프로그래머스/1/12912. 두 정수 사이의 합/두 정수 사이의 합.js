function solution(a, b) {
    let answer = (a + b) * (Math.abs(b - a) + 1) / 2;
    return answer;
}