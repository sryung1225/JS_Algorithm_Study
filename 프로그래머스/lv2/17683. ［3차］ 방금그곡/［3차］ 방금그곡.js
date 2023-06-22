function sliceSound(str) {
    // 멜로디(문장) => 음(배열) : #을 구분하기 위한 수단
    let arr = [];
    for(let i=0; i<str.length; i++){
        if(str[i+1] === "#"){
            arr.push(str[i]+"#");
            i++;
        } else {
            arr.push(str[i]);
        }
    }
    return arr;
}
function solution(m, musicinfos) {
    let mArr = sliceSound(m);

    const plays = {}; // 실제 재생한 음악 객체
    
    // 방송된 곡들의 정보 확인
    musicinfos.forEach(v => {
        v = v.split(",");
        let [start, end, title, music] = v;
        let time = (end.slice(0, 2) - start.slice(0, 2))*60 + (end.slice(3) - start.slice(3)); // 재생 시간
        let musicArr = sliceSound(music);
        
        let play = []; // 실제 재생한 악보
        for(let i=0; i<time; i++){
            play.push(musicArr[i % musicArr.length]);
        }
        plays[`${title}_${time}`] = play; // "제목_재생시간" = "멜로디"
    })
    
    // 기억한 멜로디와 일치하는 악보가 있는지 검색 (배열로 저장)
    let answer = Object.keys(plays).filter(
        key => plays[key].filter(
            (v, idx) => plays[key].slice(idx, idx+mArr.length).join("") === m
        ).length > 0
    );
    
    if(answer.length === 1){
        return answer[0].split("_")[0];
    } else if(answer.length === 0){
        return "(None)";
    } else {
        let max = ["", 0];
        for(let i=0; i<answer.length; i++){
            let v = answer[i].split("_");
            if(+max[1] < +v[1]) {
                max = v;
            }
        }
        return max[0];
    }   
}