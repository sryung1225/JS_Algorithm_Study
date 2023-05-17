function solution(intStrs, k, s, l) {
    let answer = intStrs.reduce((acc, cur) => {
        const v = +cur.slice(s, s+l);
        if(v > k) acc.push(v);
        return acc;
    }, []);
    return answer;
}