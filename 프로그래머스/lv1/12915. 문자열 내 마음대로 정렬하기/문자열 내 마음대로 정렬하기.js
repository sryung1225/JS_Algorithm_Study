function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        const chr1 = a.substr(n, 1);
        const chr2 = b.substr(n, 1);

        // 오름차순 정석 : sort((a,b) => a-b) : 값이 음수면 순서 바뀜
        if (chr1 === chr2) return (a > b) - (a < b); // sort()랑 동일한데 풀어 작성하는 것
        else return (chr1 > chr2) - (chr1 < chr2);
    })
    return answer;
}