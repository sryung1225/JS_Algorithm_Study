function solution(s, n) {
    let answer = '';
    for(let i of s){
        if(i === " ") {
            answer += i;
            continue;
        }
        let ascii = i.charCodeAt();
        let newAscii = ascii > 90 ? (ascii + n - 97) % 26 + 97 : (ascii + n - 65) % 26 + 65;
        answer += String.fromCharCode(newAscii);
    }
    return answer;
}