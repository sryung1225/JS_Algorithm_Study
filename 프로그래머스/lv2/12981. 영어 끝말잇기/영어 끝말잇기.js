function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, i) => {
        // console.log(prev, now); // 이전 단어의 마지막 글자, 현재 단어
        if(prev !== now[0] || words.slice(0, i).indexOf(now) !== -1)
            answer = answer || i;
        return now[now.length-1];
    }, "");
    return answer ? [answer%n+1, Math.ceil((answer+1)/n)] : [0, 0];
}