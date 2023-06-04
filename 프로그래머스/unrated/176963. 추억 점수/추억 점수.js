function solution(name, yearning, photo) {    
    let answer = [];
    photo.forEach(v => {
        let sum = v.reduce((acc, cur) => 
                           acc 
                           + (name.indexOf(cur) === -1 ? 0 : yearning[name.indexOf(cur)])
                           , 0);
        answer.push(sum);
    });
    return answer;
}