function solution(fees, records) {
    let car = {};
    let answer = [];
    records.forEach(v => {
        v = v.split(" ");
        let time = +v[0].slice(0, 2)*60 + +v[0].slice(3);
        let num = v[1];
        let status = v[2];
        
        if(!car[num] && status === "IN"){
            car[num] = 0-time;
        } else if(status === "OUT"){
            car[num] += time;
        } else if(car[num] && status === "IN"){
            car[num] -= time;
        }
    })
    for(let key in car){
        if(car[key] <= 0)
            car[key] += 23*60 + 59;
        let cost = fees[1] + (car[key] > fees[0] ? Math.ceil((car[key]-fees[0])/fees[2])*fees[3] : 0);
        answer.push([key, cost]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}