function solution(msg) {
    let dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let answer = [];
    
    for(let i=0; i<msg.length; i++){
        let j = i;
        let [prev, idx] = [0, 0];
        let word = "";
        for(; idx !== -1 && j < msg.length; j++){
            word = msg.slice(i, j+1);
            prev = idx;
            idx = dic.indexOf(word);
        }
        if(prev !== -1 && idx === -1){
            answer.push(prev);
            dic.push(word);
            i = j-2;
        } else if(j === msg.length && idx > 0){
            answer.push(idx);
            break;
        }
    }
    return answer;
}
