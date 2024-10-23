function solution(msg) {
    const dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const answer = [];
    let left = 0;
    while (left < msg.length) {
        let right = left;
        let word = "";
        let [prev, next] = [0, 0];
        while(next !== -1 && right < msg.length){
            right++;
            word = msg.slice(left, right);
            [prev, next] = [next, dic.indexOf(word)];
        }
        if(next === -1){
            answer.push(prev);
            dic.push(word);
            left = right - 1;
        } else if(next > 0 && right === msg.length){
            answer.push(next);
            break;
        } else {
            left++;
        }
    }
    return answer;
}
