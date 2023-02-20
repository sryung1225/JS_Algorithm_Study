function solution(n) {
    for(let x=1; x++; x<n){
        if(n%x === 1) return x;
    }
}