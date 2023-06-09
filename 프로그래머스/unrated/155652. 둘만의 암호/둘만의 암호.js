function solution(s, skip, index) {
    // 'a'.charCodeAt() = 97
    // 'z'.charCodeAt() = 122

    let answer = "";
    [...s].map(v => {
        let a = v.charCodeAt();
        for(let i=0; i<index; i++){
            a++;
            if(a > 122) a = 97;
            while(skip.includes(String.fromCharCode(a))){
                a++;
                if(a > 122) a = 97;
            }
        }
        answer += String.fromCharCode(a);
    })
    return answer;
}