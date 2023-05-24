function solution(n) {
    let answer = 1;
    for(let a=1; a<=Math.floor(n/2); a++){
        let b = Math.floor(Math.sqrt(2*n + a*(a-1)));
        if(b*(b+1) - a*(a-1) === 2*n)
            answer++;
    }
    return answer;
}

// a <= b
// n = (a+b)*(b-a+1)/2
// 2n = -a*a + a + b*b + b
// 2n = b(b+1) - a(a-1)
// b(b+1) = 2n + a(a-1)