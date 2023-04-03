function solution(s, n) {
    // Ascii 코드 계산 없이 하는 방법
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';

    for(let i of s){
        if(i === ' ') {
            answer += i;
            continue;
        }
        
        let textArr = upper.includes(i) ? upper : lower;
        let index = textArr.indexOf(i) + n;
        if(index >= textArr.length)
            index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}