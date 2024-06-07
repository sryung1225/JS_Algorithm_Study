function solution(elements) {
    const array = [...elements].concat(...elements);
    
    const set = new Set();
    for(let i=0; i<elements.length; i++){
        for(let j=0; j<elements.length; j++){
            let sum = array.slice(i, i+j+1).reduce((acc, cur) => acc + cur, 0);
            set.add(sum);
        }
    }
    return set.size;
}