function solution(myStr) {
    let answer = myStr.split(/a|b|c/).filter(v => v);
    return answer.length === 0 ? ["EMPTY"] : answer;
}