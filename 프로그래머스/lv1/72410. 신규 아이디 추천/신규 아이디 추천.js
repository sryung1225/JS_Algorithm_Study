function solution(new_id) {
    // 1단계
    let answer = [...new_id].map(v => v.toLowerCase());
    
    // 2단계
    // answer = answer.join("").match(/[0-9a-z/-/_/.]/g).join("");
    answer = answer.filter(v => (
        v === "-" || v === "_" || v === "."
        || !isNaN(Number(v))
        || v.toUpperCase() !== v
    ));
    
    // 3단계
    let tmp = 0;
    for(let i=0; i<answer.length; i++){
        if(answer[i] === ".")
            tmp++;
        else if(answer[i] !== "." && tmp > 0){
            answer = answer.slice(0, i-tmp+1).concat(answer.slice(i));
            i -= tmp-1;
            tmp = 0;   
        }
        if(i === answer.length-1 && tmp > 0){
            answer = answer.slice(0, i-tmp+2);
        }
    }
    
    // 4단계
    if(answer[0] === ".")
        answer = answer.slice(1);
    if(answer[answer.length-1] === ".")
        answer = answer.slice(0, answer.length-1);
    
    // 5단계
    if(answer.length === 0)
        answer = "a";
    else
        answer = answer.join("");
    
    // 6단계
    if(answer.length >= 16)
        answer = answer.slice(0, 15);
    if(answer[answer.length-1] === ".")
        answer = answer.slice(0, answer.length-1);
    
    // 7단계
    if(answer.length <= 2){
        while(answer.length < 3)
            answer += answer[answer.length-1];
    }
    return answer;
}