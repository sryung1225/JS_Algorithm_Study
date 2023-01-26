function solution(num, total) {
    let x = total/num - num/2 + 1/2;
    let answer = new Array(num).fill().map((_, i) => i+x);
    return answer;
}