function solution(d, budget) {
    const arr = d.sort((a,b)=>a-b); // 가격 오름차순 정렬
    let sum = 0;
    let answer = 0;
    for(let i of arr){
        sum += i;
        if(sum <= budget) answer++;
    }
    return answer;
}