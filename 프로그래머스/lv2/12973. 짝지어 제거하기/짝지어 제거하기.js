function solution(s) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        stack.push(s[i])
        if(stack[stack.length-1] == stack[stack.length-2] ){
            stack.pop()
            stack.pop()
        }
        // console.log(s, stack)
    }
    return stack.length === 0 ? 1 : 0;
}