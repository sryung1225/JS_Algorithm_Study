function solution(numbers) {
    let answer = 0;
    answer = 45 - numbers.reduce((acc, cur) => acc + cur, 0);
    return answer;
}