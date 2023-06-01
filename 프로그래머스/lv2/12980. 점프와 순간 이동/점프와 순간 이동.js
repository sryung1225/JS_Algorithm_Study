function solution(n){
    if(n === 1)
        return 1;
    return n.toString(2).split("").reduce((a, b) => +a + +b, 0);
}