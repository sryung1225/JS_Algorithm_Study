function solution(citations) {
    citations.sort((a, b) => a - b);
    let i=0;
    while(citations[i] < citations.length-i){
        i++;
    }
    return citations.length-i;
}