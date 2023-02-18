function solution(x, n) {
    let answer = Array(n).fill(x).map((v,i) => v*(i+1));
    return answer;
}