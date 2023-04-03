function solution(a, b) {
    let gap = Math.abs(b-a);
    let answer = (a+b)*(gap+1)/2;
    return answer;
}