function solution(id_list, report, k) {
    let id = id_list.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});
    let size = id_list.length;
    let history = Array.from(Array(size), () => Array(size).fill(0));
    
    report.forEach((item) => {
        const [f, t] = item.split(" ");
        if(history[id[f]][id[t]] === 0){
            history[id[f]][id[t]] = 1;
            history[id[t]][id[t]]++;
        }
    })
    
    let mails = Array(size).fill(0);
    for(let i=0; i<size; i++){
        if(history[i][i] >= k){
            for(let j=0; j<size; j++){
                if(i !== j && history[j][i] === 1) mails[j]++;
            }
        }
    }
    return mails;
}