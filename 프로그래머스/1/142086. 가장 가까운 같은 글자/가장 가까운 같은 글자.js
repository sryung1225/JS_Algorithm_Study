function solution(s) {
    let words = {};
    let answer = [];
    
    for(let i=0; i<s.length; i++){
        if(words[s[i]] === undefined) answer.push(-1);
        else answer.push(i - words[s[i]]);
        words[s[i]] = i;
    }
    
    return answer;
}