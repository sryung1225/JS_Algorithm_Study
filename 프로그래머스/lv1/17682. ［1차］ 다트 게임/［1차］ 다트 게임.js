function solution(dartResult) {
    let answer = 0;
    
    // 점수/보너스/옵션 배열로 분리 : 문자열 arr
    let str = dartResult.split("");
    let arr = [];
    for(let i=0; i<str.length; i++){
        if(!isNaN(str[i]) && !isNaN(str[i+1])){
            arr.push(str[i]+str[i+1]);
            i++;
        } else {
            arr.push(str[i]);
        }
    }
    
    let tmp1, tmp2 = 0;
    for(let i of arr){
        if(!isNaN(i)) {
            if(tmp1){
                answer += tmp1;
                tmp2 = tmp1;
            }
            tmp1 = +i;
        } else if(i === "S") {
            tmp1 = Math.pow(tmp1, 1);
        } else if(i === "D") {
            tmp1 = Math.pow(tmp1, 2);
        } else if(i === "T") {
            tmp1 = Math.pow(tmp1, 3);
        } else if(i === "*") {
            tmp1 *= 2;
            if(tmp2) answer += tmp2;
        } else if(i === "#") {
            tmp1 *= -1;
        }
        // console.log(`i는 ${i}, tmp1는 ${tmp1}, tmp2는 ${tmp2}, answer는 ${answer}`);
    }
    answer += tmp1;
    return answer;
}