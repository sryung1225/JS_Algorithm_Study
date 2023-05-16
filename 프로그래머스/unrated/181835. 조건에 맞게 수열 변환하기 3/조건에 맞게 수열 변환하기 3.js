function solution(arr, k) {
    if(k % 2 === 1){
        return arr.map(v => v*k);
    } else {
        return arr.map(v => v+k);
    }
}