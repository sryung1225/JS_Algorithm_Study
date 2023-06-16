function solution(s) {
    let ele = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
    ele.sort((a, b) => a.length - b.length);
    
    let answer = [];
    ele.forEach(arr => {
        arr.forEach(v => {
            answer.push(+v);
        })
    })
    return [...new Set(answer)];
}