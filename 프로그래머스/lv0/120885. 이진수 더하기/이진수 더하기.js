function solution(bin1, bin2) {
    // 두 수 10진수로 변경해서 합 구하기
    let num1 = bin1.split("").reverse();
    let num2 = bin2.split("").reverse();
    let sum = 0;
    for(let i=0; i<num1.length; i++) if(num1[i] == 1) sum += Math.pow(2, i);
    for(let j=0; j<num2.length; j++) if(num2[j] == 1) sum += Math.pow(2, j);
    
    // 합을 2진수로 변화하기 이전, 크기값 우선 계산
    let size = 0;
    for(let k=0; k<11; k++){
        if(Math.pow(2,k) <= sum && Math.pow(2,k+1) > sum){
            size = k;
            break;
        }
    }
    
    // 합을 2진수로 변환하기
    let answer = [];
    for(let x=size; x>=0; x--){
        if(sum >= Math.pow(2,x)){
            answer.push("1");
            sum -= Math.pow(2,x);
        }
        else answer.push("0");
    }
    return answer.join("");
}