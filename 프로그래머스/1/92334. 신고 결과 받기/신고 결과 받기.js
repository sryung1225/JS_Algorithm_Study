function solution(id_list, report, k) {
    const reportObj = {};
    report.forEach((rep) => {
        const [from, to] = rep.split(" ");
        if(!reportObj[to]) reportObj[to] = new Set();
        reportObj[to].add(from);
    })
    const reportArr = Object.keys(reportObj);
    let answer = new Array(id_list.length).fill(0);
    reportArr.forEach((rep) => {
        if(reportObj[rep].size >= k){
            [...reportObj[rep]].forEach((id) => {
                answer[id_list.indexOf(id)]++;
            })
        }
    })
    return answer;
}