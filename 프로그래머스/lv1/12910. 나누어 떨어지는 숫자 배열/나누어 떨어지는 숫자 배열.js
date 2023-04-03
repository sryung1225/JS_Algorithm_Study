function solution(arr, divisor) {
    let answer = arr.filter(v => v%divisor === 0);
    if(answer.length === 0) answer = [-1];
    else answer.sort((a,b)=>a-b);
    return answer;
}