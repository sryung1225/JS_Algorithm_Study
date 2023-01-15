function solution(sides) {
    const s1 = Math.min(...sides);
    const s2 = Math.max(...sides);
    let answer = [];
    for(let i=1; i<s1+s2; i++){
        if(s2 < s1+i || i >= s2){
            // console.log(i);
            answer.push(i);
        }
    }   
    return answer.length;
}