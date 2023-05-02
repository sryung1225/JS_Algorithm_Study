function solution(intStrs, k, s, l) {
    let answer = intStrs.map(v => +v.slice(s, s+l)).filter(v => v > k);
    return answer;
}