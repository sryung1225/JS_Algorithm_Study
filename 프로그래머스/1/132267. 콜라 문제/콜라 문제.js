function solution(a, b, n) {
    let answer = 0;
    let restCoke = 0;
    
    function recycle(emptyCoke) {
        const newCoke = Math.floor((emptyCoke + restCoke) / a) * b;
        restCoke = (emptyCoke + restCoke) % a;
        if(newCoke === 0) return;
        answer += newCoke;
        return recycle(newCoke);
    }
    
    recycle(n);
    return answer;
}