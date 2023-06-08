function solution(k, score) {
    let scores = [];
    return score.reduce((acc, cur) => {
        scores.push(cur);
        scores = scores.sort((a, b) => b - a).slice(0, k);
        return [...acc, Math.min(...scores)];
    }, []);
}