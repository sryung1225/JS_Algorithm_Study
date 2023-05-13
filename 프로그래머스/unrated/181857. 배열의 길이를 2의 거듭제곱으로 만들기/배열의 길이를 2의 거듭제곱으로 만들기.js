function solution(arr) {
    return new Array(2**Math.ceil(Math.log2(arr.length))).fill(0).map((v, i) => arr[i] ?? v);
}