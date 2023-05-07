function solution(numbers, n) {
    return numbers.reduce((acc, cur) => acc + (acc <= n ? cur : 0), 0);
}