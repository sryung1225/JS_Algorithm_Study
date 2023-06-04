function solution(name, yearning, photo) {
    // 그리워하는 사람들+점수 객체로 생성 
    let miss = {};
    name.forEach((v, i) => {
        miss[v] = yearning[i];
    })
    
    let answer = [];
    photo.forEach(v => {
        let sum = v.reduce((acc, cur) => acc + (miss[cur] ? miss[cur] : 0), 0);
        answer.push(sum);
    });
    return answer;
}