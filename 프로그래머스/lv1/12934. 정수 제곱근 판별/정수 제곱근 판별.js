function solution(n) {
    // console.log(Math.sqrt(n));
    if(Number.isInteger(Math.sqrt(n))){
        return Math.pow(Math.sqrt(n)+1, 2);
    } else {
        return -1;
    }
}