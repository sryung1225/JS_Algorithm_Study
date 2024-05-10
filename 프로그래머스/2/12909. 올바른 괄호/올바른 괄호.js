function solution(s){
    let startCount = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] === "(") startCount++;
        else if(s[i] === ")") startCount--;
        if(startCount < 0) return false;
    }
    return startCount === 0 ? true : false;
}