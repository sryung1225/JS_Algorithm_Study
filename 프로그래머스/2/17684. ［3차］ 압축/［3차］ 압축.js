function solution(msg) {
    const wiki = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // 27번부터 신규 추가
    const answer = [];
    for(let i=0; i<msg.length; i++){
        let w = msg[i];
        let num = wiki.indexOf(w);
        let check = true;
        let next = 0;
        while(check) {
            let has = wiki.indexOf(w);
            if(has === -1) {
                check = false;
                wiki.push(w);
                i += next - 1;
            } else {
                num = has;
                next++;
                w += msg[i+next];
            }
        }
        answer.push(num); 
    }
    return answer;
}