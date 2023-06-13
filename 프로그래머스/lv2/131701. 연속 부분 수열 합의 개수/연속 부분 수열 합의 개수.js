function solution(elements) {
    let ele = elements.concat(elements);
    let answer = [];
    for(let i=0; i<elements.length; i++){
        for(let j=1; j<=elements.length; j++){
            let sum = ele.slice(i, i+j).reduce((acc, cur) => acc + cur, 0);
            answer.push(sum);
        }
    }
    return [...new Set(answer)].length;
}
