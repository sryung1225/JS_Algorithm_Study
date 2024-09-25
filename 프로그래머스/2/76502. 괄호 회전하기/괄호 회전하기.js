function solution(s) {
    const size = s.length;
    let answer = 0;
    let row = s.split("");
    for(let i = 0; i<size; i++){
        const stack = [];
        for(let j=0; j<size; j++){
            const s = row[j];
            const l = stack[stack.length - 1];
            if(s === "[" || s === "(" || s === "{"){
                stack.push(s);
            } else if((s === "]" && l === "[") 
                      || (s === ")" && l === "(") 
                      || (s === "}" && l === "{")){
                stack.pop(); 
            } else {
                break;
            }
            if(j === size - 1 && stack.length === 0) {
                answer++;
            }
        }
        row.push(row.shift());
    }
    return answer;
}