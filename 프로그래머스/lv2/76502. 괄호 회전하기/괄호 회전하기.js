function isGood(s) {
    let stack = [];
    for(let i=0; i<s.length; i++){
        let idx = 0;
        if((s[i] === "]" && stack[stack.length-1] === "[")
          || (s[i] === ")" && stack[stack.length-1] === "(")
          || (s[i] === "}" && stack[stack.length-1] === "{")){
            stack.pop();
        } else if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i]);
        } else {
            return false;
        }
    }
    return stack.length === 0 ? true : false;
}

function solution(s) {
    s = [...s];
    let answer = 0;
    if(isGood(s))
        answer++;
    for(let i=1; i<s.length; i++){
        let tmp = s.shift();
        s.push(tmp);
        if(isGood(s))
            answer++;
    } 
    return answer;
}