function solution(s, n) {
    let answer = '';
    for(let i of s){
        let ascii = i.charCodeAt();
        
        if(i === ' ') answer += i; // 공백
        if(ascii >= 65 && ascii <= 90){ // A ~ Z
            answer += String.fromCharCode((ascii + n > 90) ? ascii + n - 26 : ascii + n);
        } else if(ascii >= 97 && ascii <= 122){ // a ~ z
            answer += String.fromCharCode((ascii + n > 122) ? ascii + n - 26 : ascii + n);
        }
    }
    return answer;
}