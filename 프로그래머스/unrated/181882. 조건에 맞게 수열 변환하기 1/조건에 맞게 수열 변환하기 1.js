function solution(arr) {
    return arr.map(v =>
        (v % 2 === 0 && v >= 50) ? v/2 : (v % 2 === 1 && v < 50) ? v*2 : v
    );
}