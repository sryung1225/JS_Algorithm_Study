function solution(s, skip, index) {
    const skipArr = skip.split("").map((v) => v.charCodeAt());
    let answer = "";
    s.split("").forEach((v) => {
        let ascii = v.charCodeAt();
        for(let i=0; i<index; i++){
            ascii = (ascii + 1) > 122 ? 97 : ascii + 1;
            while(skipArr.includes(ascii)){
                ascii = (ascii + 1) > 122 ? 97 : ascii + 1;
            }
        }
        answer += String.fromCharCode(ascii);
    })
    return answer;
}