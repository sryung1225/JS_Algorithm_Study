function solution(s, skip, index) {
    let words = "abcdefghijklmnopqrstuvwxyz";
    [...skip].forEach(v => {
        words = words.split(v).join("");
    });
    words = [...words];
    
    let answer = "";
    [...s].forEach(v => {
        let pos = (words.indexOf(v) + index) % words.length;
        answer += words[pos];
    });
    return answer;
}