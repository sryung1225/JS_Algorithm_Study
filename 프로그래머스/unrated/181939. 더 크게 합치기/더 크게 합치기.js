function solution(a, b) {
    let answer = +(a+""+b) > +(b+""+a) ? +(a+""+b) : +(b+""+a);
    return answer;
}