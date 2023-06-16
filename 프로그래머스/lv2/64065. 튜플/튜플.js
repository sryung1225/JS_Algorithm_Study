function solution(s) {
    let s2 = s.slice(2,s.length-2).split("},{");
    let ele = s2.map(v => v.split(","));
    ele.sort((a, b) => a.length - b.length);
    
    let answer = [];
    ele.forEach(arr => {
        arr.forEach(v => {
            answer.push(+v);
        })
    })
    return [...new Set(answer)];
}