function solution(a, b) {
    let answer = Math.max(+(a+""+b), +(b+""+a));
    return answer;
}