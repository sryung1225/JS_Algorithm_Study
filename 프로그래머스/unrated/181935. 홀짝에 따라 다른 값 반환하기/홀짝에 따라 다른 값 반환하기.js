function solution(n) {
    let sum = 0;
    if(n % 2 === 1){
        sum = (n+1)*(n+1)/4;
    } else {
        sum = n*(n+1)*(n+2)/6;
    }
    return sum;
}