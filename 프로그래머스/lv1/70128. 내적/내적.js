function solution(a, b) {
    let answer = a.reduce((acc, cur, index) => acc+=(cur*b[index]), 0)
    return answer;
}