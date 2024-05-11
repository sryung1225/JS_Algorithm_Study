function solution(keymap, targets) {
    const keys = {};
    keymap.forEach((map) => {
        map.split("").forEach((key, index) => {
            if(!keys[key] || keys[key] > index + 1) keys[key] = index + 1;
        })
    })
    let answer = [];
    targets.forEach((target) => {
        let count = 0;
        for(let i=0; i<target.length; i++){
            if(!keys[target[i]]) {
                count = -1;
                break;
            } else {
                count += keys[target[i]];
            }
        }
        answer.push(count);
    })
    return answer;
}