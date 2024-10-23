function solution(msg) {
    const oldDic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newDic = new Map();
    let index = 27;
    const answer = [];
    for(let left = 0; left < msg.length; left++){
        let right = left + 1;
        let word = msg[left];
        let [prev, next] = [0, oldDic.indexOf(word)];
        let found = false;
        while(!found){
            if(next !== -1){
                word += msg[right++];
                [prev, next] = [next, newDic.get(word) || -1];
            } else {
                found = true;
                newDic.set(word, index++);
                left = right - 2;
            }
        }
        answer.push(prev);
    }
    return answer;
}
