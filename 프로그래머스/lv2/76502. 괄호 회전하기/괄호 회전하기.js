function isGood(s) {
    let stack = [];
    for(let i=0; i<s.length; i++){
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
    let answer = 0;
    for(let i=0; i<s.length; i++){
        const rotate = s.slice(i) + s.slice(0, i);
        if(isGood(rotate))
            answer++;
    } 
    return answer;
}