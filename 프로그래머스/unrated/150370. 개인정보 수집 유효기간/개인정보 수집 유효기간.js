function solution(today, terms, privacies) {
    today = today.split(".").map(v => +v);
    today = (today[0]-1)*28*12 + (today[1]-1)*28 + today[2];
    let termObj = {}; 
    terms.forEach(v => {
        v = v.split(" ");
        termObj[v[0]] = +v[1];
    })
    
    let answer = [];
    privacies.forEach((v, i) => {
        v = v.split(" ");
        let date = v[0].split(".").map(v => +v);
        let type = v[1];
        
        date = (date[0]-1)*28*12 + (date[1]+termObj[type]-1)*28 + date[2];
        if(today >= date)
            answer.push(i+1);
    })
    return answer;
}