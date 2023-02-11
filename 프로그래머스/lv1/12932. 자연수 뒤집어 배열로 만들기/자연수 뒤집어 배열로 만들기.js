function solution(n) {
    let answer = n.toString().split("").reverse();
    return answer.map(e => +e);
}