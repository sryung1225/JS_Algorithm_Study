function solution(s) {
    let ele = [];
    let s2 = s.slice(1,s.length-2).split("},");
    s2.forEach(v => {
        let item = v.slice(1).split(",");
        ele.push(item)
    })
    ele.sort((a, b) => a.length - b.length);
    
    let answer = [];
    ele.forEach(arr => {
        arr.forEach(v => {
            if(!answer.includes(+v))
                answer.push(+v);
        })
    })
    return answer;
}