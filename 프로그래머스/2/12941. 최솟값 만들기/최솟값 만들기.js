function solution(A,B){
    const ascA = A.sort((a, b) => a - b);
    const descB = B.sort((a, b) => b - a);
    let answer = ascA.reduce((acc, cur, idx) => 
        acc + cur * descB[idx]
    , 0);
    return answer;
}