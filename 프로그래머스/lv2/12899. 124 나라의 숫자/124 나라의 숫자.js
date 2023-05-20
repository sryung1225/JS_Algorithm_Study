function solution(n) {
    let arr = [1, 2, 4];
    return n === 0 
        ? ""
        : solution(parseInt((n - 1) / 3)) + arr[(n - 1) % 3];
}