function solution(arr, k) {
    return arr.map(v => k%2===0 ? v+k : v*k);
}