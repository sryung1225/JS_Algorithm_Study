function solution(id_list, report, k) {
    let user = {};
    id_list.forEach(v => {user[v] = []});
    
    report.forEach(v => {
        let [reporter, baduser] = v.split(" ");
        if(!user[baduser].includes(reporter))
            user[baduser].push(reporter);
    })
    user = Object.entries(user);
    
    let answer = Array(id_list.length).fill(0);
    user.forEach((v, i) => {
        if(v[1].length >= k){
            v[1].forEach(reporter => {
                let idx = id_list.indexOf(reporter);
                answer[idx]++;
            })
        }
    })
    return answer;
}