function solution(babbling) {
    let answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;
    // 문자열 내에 aya, ye, woo, ma 가 있는지 처음부터 끝까지 모두 검사

    babbling.forEach(v => {
        if(regex.test(v)) answer++;
    })
    // babbling의 요소 문자열 v가 aya, ye, woo, ma 를 갖고 있으면 true, answer++ 실행
    return answer;
}