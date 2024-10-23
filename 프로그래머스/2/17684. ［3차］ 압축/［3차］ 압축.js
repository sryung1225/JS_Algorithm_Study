function solution(msg) {
    const dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const answer = [];
    for(let left = 0; left < msg.length; left++){
        let right = left + 1;
        let word = msg[left];
        let [prev, next] = [0, dic.indexOf(word)];
        let found = false;
        while(!found){
            if(next !== -1){
                word += msg[right++];
                [prev, next] = [next, dic.indexOf(word)];
            } else {
                found = true;
                dic.push(word);
                left = right - 2;
            }
        }
        answer.push(prev);
    }
    return answer;
}
