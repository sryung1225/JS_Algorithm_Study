function solution(arr, divisor) {
    const answer = arr.filter((num) => num % divisor === 0);
    return answer.length > 0 ? answer.sort((b, a) => b - a) : [-1];
}