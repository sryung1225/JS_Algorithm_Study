function solution(citations) {
    citations.sort((a, b) => b - a);
    let i=0;
    while(citations[i] >= i+1){
        i++;
    }
    return i;
}