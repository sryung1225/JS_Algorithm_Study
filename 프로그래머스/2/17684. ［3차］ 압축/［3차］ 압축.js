function solution(msg) {
    const dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const answer = [];
    
    for(let left = 0; left < msg.length; left++){
        let right = left;
        let word = "";
        let [prev, next] = [0, 0];
        for(; next !== -1 && right < msg.length; right++){
            word = msg.slice(left, right + 1);
            [prev, next] = [next, dic.indexOf(word)];
        }
        if(next === -1){
            answer.push(prev);
            dic.push(word);
            left = right - 2;
        } else if(next > 0 && right === msg.length){
            answer.push(next);
            break;
        }
    }
    return answer;
}
