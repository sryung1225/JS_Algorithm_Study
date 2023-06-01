function solution(n,a,b){
    let answer = 0;
    while(n>1){
        answer++;
        n /= 2;
        if(Math.ceil(a/Math.pow(2, answer)) === Math.ceil(b/Math.pow(2, answer)))
            break;
    }
    return answer;
}