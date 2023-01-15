function solution(sides) {
    sides.sort((a,b) => Number(a)-Number(b)); // 오름차순 정렬
    const s1 = +sides[0];
    const s2 = +sides[1];
    
    let answer = [];
    for(let i=1; i<s1+s2; i++){
        if(s2 < s1+i || i >= s2){
            // console.log(i);
            answer.push(i);
        }
    }   
    return answer.length;
}