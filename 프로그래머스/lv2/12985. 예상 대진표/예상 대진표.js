function solution(n,a,b){
    let i = 0;
    while(Math.ceil(a/Math.pow(2, i)) !== Math.ceil(b/Math.pow(2, i))){
        i++;
        n /= 2;
    }
    return i;
}