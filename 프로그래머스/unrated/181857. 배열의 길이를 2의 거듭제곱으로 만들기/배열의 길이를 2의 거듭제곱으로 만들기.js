function solution(arr) {
    let size = 0;
    while(arr.length > Math.pow(2, size)){
        size++;
    }
    return new Array(Math.pow(2,size)).fill(0).map((v, i) => arr[i] ?? v);
}