function solution(elements) {
    let ele = elements.concat(elements);
    let answer = new Set();
    for(let i=0; i<elements.length; i++){
        for(let j=0; j<elements.length; j++){
            let sum = ele.slice(i, i+j).reduce((acc, cur) => acc + cur, 0);
            answer.add(sum);
        }
    }
    return answer.size;
}
