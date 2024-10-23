function solution(msg) {
    const dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const answer = [];
    for(let left = 0; left < msg.length; left++){
        let word = msg[left];
        let num = dic.indexOf(word);
        let right = 0;
        let found = false;
        while(!found){
            let nextNum = dic.indexOf(word);
            if(nextNum !== -1){
                word += msg[left + ++right];
                num = nextNum;
            } else {
                found = true;
                dic.push(word);
                left += right - 1;
            }
        }
        answer.push(num);
    }
    return answer;
}
