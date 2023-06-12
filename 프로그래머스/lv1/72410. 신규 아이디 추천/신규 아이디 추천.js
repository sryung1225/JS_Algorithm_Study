function solution(new_id) {
    // 1단계
    let answer = new_id.toLowerCase();
    
    // 2단계
    answer = answer.replace(/[^\w-_.]/g, "");
    
    // 3단계
    answer = answer.replace(/\.+/g, ".");
    
    // 4단계
    answer = answer.replace(/^\.|\.$/g, "");
    
    // 5단계
    answer = answer.replace(/^$/, "a");
    
    // 6단계
    answer = answer.slice(0, 15).replace(/\.$/, "");
    
    // 7단계
    if(answer.length <= 2)
        answer += answer[answer.length-1].repeat(3 - answer.length);

    return answer;
}