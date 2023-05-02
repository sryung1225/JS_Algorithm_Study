function solution(q, r, code) {
    let answer = "";
    [...code].map((v, i) => {
        if(i % q === r) answer += v;
    })
    return answer;
}