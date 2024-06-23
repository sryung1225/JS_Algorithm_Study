function solution(msg) {
    const dic = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // 27번부터 신규 추가
    const answer = [];
    
    for(let i=0; i<msg.length; i++){
        let word = msg[i];
        let num = dic.indexOf(word);
        let next = 0;
        let moreCheck = true;
        while(moreCheck) {
            let hasWord = dic.indexOf(word); // dic에 word 있나요?
            if(hasWord === -1) { // 없어요! => 탐색 종료
                moreCheck = false;
                dic.push(word);
                i += next - 1;
            } else { // 있어요! => 다음 탐색 준비
                num = hasWord;
                next++;
                word += msg[i + next];
            }
        }
        answer.push(num); 
    }
    return answer;
  }