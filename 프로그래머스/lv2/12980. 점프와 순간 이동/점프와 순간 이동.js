function solution(n){
    let count = 1;
    while(n > 1){
        if(n % 2 !== 0)
            count++;
        n = Math.floor(n/2);
    }
    return count;
}