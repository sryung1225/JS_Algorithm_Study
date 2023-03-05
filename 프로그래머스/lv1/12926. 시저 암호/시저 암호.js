function solution(s, n) {
    let answer = '';
    
    // A ~ Z : 65 ~ 90
    // a ~ z : 97 ~ 112
    for(let i of s){
        let ascii = i.charCodeAt();
        
        if(i === ' ') answer += i;
        else answer += 
            String.fromCharCode( 
                (ascii > 90) 
                ? (ascii + n - 97) % 26 + 97
                : (ascii + n - 65) % 26 + 65
            )
    }
    return answer;
}