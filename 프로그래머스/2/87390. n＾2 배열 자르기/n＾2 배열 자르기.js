function solution(n, left, right) {
    let answer = new Array(right - left + 1).fill(0);
    answer = answer.map((_, i) => {
        const idx = i + left;
        const col = Math.floor(idx / n);
        const row = idx % n;
        return Math.max(col, row) + 1;
    });
    return answer;
}