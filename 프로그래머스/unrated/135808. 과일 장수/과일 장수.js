function solution(k, m, score) {
    return score.sort((a, b) => b - a)
        .filter((_, i) => i%m === m-1)
        .reduce((acc, cur) => acc + cur*m, 0);
}