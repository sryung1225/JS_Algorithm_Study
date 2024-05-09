function solution(strings, n) {
    let answer = [...strings].sort((a, b) => {
        if(a[n] > b[n]) return 1;
        else if(a[n] < b[n]) return -1;
        else if(a[n] === b[n] && a > b) return 1;
        else return -1;
    });
    return answer;
}