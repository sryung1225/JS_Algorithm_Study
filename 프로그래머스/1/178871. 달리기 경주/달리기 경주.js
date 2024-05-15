function solution(players, callings) {
    let p = [...players];
    let obj = p.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});
    callings.forEach((winner) => {
        let rank = obj[winner];
        let loser = p[rank - 1];
        p[rank - 1] = winner;
        p[rank] = loser;
        obj[winner]--;
        obj[loser]++;
    })
    return p;
}