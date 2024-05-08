function solution(s) {
    let arr = s.split(" ");
    let answer = [];
    arr.forEach((str) => {
        let answerStr = "";
        for(let i=0; i<str.length; i++){
            if(i % 2 === 0) answerStr += str[i].toUpperCase();
            else answerStr += str[i].toLowerCase();   
        }
        answer.push(answerStr);
    })
    return answer.join(" ");
}