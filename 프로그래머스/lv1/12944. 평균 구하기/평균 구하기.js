function solution(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    let answer = sum/arr.length;
    return answer;
}