function solution(arr, divisor) {
    let answer = [];
    arr.forEach(ele => {
        if(ele % divisor === 0) answer.push(ele);
    })
    if(answer.length > 0) answer.sort((a, b) => a - b);
    else answer.push(-1);
    return answer;
}