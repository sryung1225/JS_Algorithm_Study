function solution(picture, k) {
    let answer = [];
    picture.forEach(v => {
        let tmp = [];
        for(let i=0; i<k; i++){
            answer.push([...v].map(t => t.repeat(k)).join(""));
        }
    })
    return answer;
}