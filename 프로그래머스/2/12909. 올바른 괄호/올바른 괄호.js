function solution(s){
    let answer = true;
    const stack = [];
    for(let c of s){
        if(c === "("){
            stack.push(c);
        } else if(c === ")" && stack.length > 0){
            stack.pop();
        } else {
            answer = false;
            break;
        }
    }
    if(stack.length > 0) answer = false;
    return answer;
}