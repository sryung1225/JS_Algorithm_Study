function solution(id_list, report, k) {
    const reportObj = {};
    report.forEach((rep) => {
        const [from, to] = rep.split(" ");
        if(!reportObj[to]) reportObj[to] = [0, new Set()];
        if(!reportObj[to][1].has(from)){
            reportObj[to][0]++;
            reportObj[to][1].add(from);
        }
    })
    const reportArr = Object.entries(reportObj);
    let answer = new Array(id_list.length).fill(0);
    reportArr.forEach((rep) => {
        if(rep[1][0] >= k){
            [...rep[1][1]].forEach((id) => {
                answer[id_list.indexOf(id)]++;
            })
        }
    })
    return answer;
}