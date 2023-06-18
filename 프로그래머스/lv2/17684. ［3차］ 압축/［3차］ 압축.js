function solution(msg) {
    let dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let answer = [];
    let i = 0;
    while(i<msg.length){
        let j = i;
        let [prev, idx] = [0, 0];
        let word = "";
        while(idx !== -1 && j < msg.length){
            j++;
            word = msg.slice(i, j);
            prev = idx;
            idx = dic.indexOf(word);
        }
        if(prev !== -1 && idx === -1){
            answer.push(prev);
            dic.push(word);
            i = j-1;
        } else if(j === msg.length && idx > 0){
            answer.push(idx);
            i = msg.length;
        } else {
            i++;
        }
    }
    return answer;
}
