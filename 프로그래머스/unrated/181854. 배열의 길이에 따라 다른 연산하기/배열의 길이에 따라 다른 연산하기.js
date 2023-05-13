function solution(arr, n) {
    if(arr.length % 2 === 0){
        return arr.map((v, i) => i%2 === 0 ? v : v+n);
    } else {
        return arr.map((v, i) => i%2 === 0 ? v+n : v);
    }
}