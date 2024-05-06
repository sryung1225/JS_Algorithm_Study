function solution(s) {
    let answer = s.slice(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
    return answer;
}