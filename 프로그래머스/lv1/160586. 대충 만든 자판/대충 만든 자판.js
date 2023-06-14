function solution(keymap, targets) {
    // 알파벳을 만들기 위해 키를 누르는 최소 횟수
    let keyObj = {};
    keymap.forEach(w => {
        [...w].map((v, i) => keyObj[v] = (keyObj[v] < i+1 ? keyObj[v] : i+1));
    });
    
    let answer = [];
    targets.forEach(str => {
        let touch = [...str].reduce((acc, cur) => acc + keyObj[cur], 0);
        answer.push(touch || -1);
    })
    return answer;
}