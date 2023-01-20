function solution(numlist, n) {
    // let arr = numlist.map(v => v-n).sort((a,b) => Math.abs(b)-Math.abs(a));
    // let answer = arr.map(v => v+n).reverse(); // 실패 원인 분석 필요
    
    let arr = [];
    for(let i of numlist){
        arr.push([i, Math.abs(n-i)]);
    }
    arr.sort((a, b) => a[1]-b[1] || b[0]-a[0]); // [1]정렬-[0]정렬 순 진행
    
    let answer = [];
    for(let i of arr){
        answer.push(i[0]);
    }
    return answer;
}