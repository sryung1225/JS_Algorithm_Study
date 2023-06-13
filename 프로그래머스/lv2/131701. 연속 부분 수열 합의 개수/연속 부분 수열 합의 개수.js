function solution(elements) {
    let ele = elements.concat(elements);
    let answer = new Set();
    for(let i=0; i<elements.length; i++){
        let sum = 0;
        for(let j=0; j<elements.length; j++){
            sum += ele[i+j];
            answer.add(sum);
        }
    }
    return answer.size;
}
