function solution(a, b) {
    let answer = 1;
    
    let gcd = 1;
    for(let i=Math.min(a, b); i>=1; i--){
        if(a%i === 0 && b%i === 0) {
            gcd = i;
            break;
        }
    }
    b = b/gcd;
    
    while(b !== 1){
        if(b%2 === 0) b/=2;
        else if(b%5 === 0) b/=5;
        else {
            answer = 2;
            break;
        }
    }
    return answer;
}