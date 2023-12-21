function solution(A, B) {
    if(A === B) return 0;
    
    const str = [...A];
    let answer = 1;
    
    for(let i=0; i<A.length; i++){
        let item = str.pop();
        str.unshift(item);
        if(str.join("") === B){
            break;
        } else {
            answer++;
        }
    }

    return answer >= A.length ? -1 : answer;
}