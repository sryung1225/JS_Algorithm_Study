function solution(n) {
    let answer = Number(n.toString().split("").sort((a, b) => b - a).join(""));
    return answer;
}