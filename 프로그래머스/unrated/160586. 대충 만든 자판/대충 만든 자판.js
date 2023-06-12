function solution(keymap, targets) {
    // 알파벳을 만들기 위해 키를 누르는 최소 횟수
    let keyObj = {};
    keymap.forEach(w => {
        [...w].map((v, i) => keyObj[v] = (keyObj[v] < i+1 ? keyObj[v] : i+1));
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