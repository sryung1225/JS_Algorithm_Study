function solution(n, k) {
    return Array(Math.floor(n/k)).fill(k).map((v,i) => v*(i+1));
}