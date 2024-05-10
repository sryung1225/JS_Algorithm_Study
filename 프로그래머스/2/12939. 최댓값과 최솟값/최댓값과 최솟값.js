function solution(s) {
    let arr = s.split(" ").map(Number);
    let answer = [Math.min(...arr), Math.max(...arr)];
    return answer.join(" ");
}