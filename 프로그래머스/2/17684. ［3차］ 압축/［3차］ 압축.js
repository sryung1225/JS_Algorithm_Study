function solution(msg) {
    const oldDic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newDic = new Map();
    let index = 27;

    const answer = [];

    let left = 0;
    while (left < msg.length) {
        let word = msg[left];
        let num = oldDic.indexOf(word);
        let found = false;
        for(let right = left + 1; right <= msg.length; right++){
            const nextWord = word + (msg[right] || "");
            if (newDic.has(nextWord)) {
                word = nextWord;
                num = newDic.get(nextWord);
            } else {
                answer.push(num);
                newDic.set(nextWord, index++);
                left = right - 1;
                found = true;
                break;
            }
        }
        if(!found){
            answer.push(num);
            break;
        }
        left++;
    }
    return answer;
}
