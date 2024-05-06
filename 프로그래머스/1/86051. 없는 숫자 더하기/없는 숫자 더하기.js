function solution(numbers) {
    let sum = (0 + 9)*10/2;
    let answer = sum - numbers.reduce((acc, cur) => acc + cur, 0);
    return answer;
}