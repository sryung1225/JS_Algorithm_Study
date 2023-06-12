function solution(keymap, targets) {
    // 알파벳을 만들기 위해 키를 누르는 최소 횟수
    let keyObj = {};
    keymap.forEach(w => {
        for(let i=0; i<w.length; i++){
            if(!keyObj[w[i]] || keyObj[w[i]] > i+1){
                keyObj[w[i]] = i+1;
            }
        }
    });
    
    let answer = [];
    targets.forEach(str => {
        let touch = 0;
        for(let i=0; i<str.length; i++){
            if(keyObj[str[i]]){
                touch += keyObj[str[i]];
            } else {
                touch = -1;
                break;
            }
        }
        answer.push(touch);
    })
    return answer;
}