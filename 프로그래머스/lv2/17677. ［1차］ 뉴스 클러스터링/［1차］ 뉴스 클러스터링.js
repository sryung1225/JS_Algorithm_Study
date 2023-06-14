function cutWord(str) {
    let arr = [];
    for(let i=0; i<str.length-1; i++){
        let w1 = str[i];
        let w2 = str[i+1];
        if((w1.toUpperCase() !== w1.toLowerCase()) 
           && (w2.toUpperCase() !== w2.toLowerCase()))
            arr.push((w1+w2).toUpperCase());
    }
    return arr;
}

function solution(str1, str2) {
    let answer = 0;
    const arr1 = cutWord(str1);
    const arr2 = cutWord(str2);
    const set = new Set([...arr1, ...arr2]);
    let uni = 0; // 합집합 갯수
    let int = 0; // 교집합 갯수
    
    set.forEach(v => {
        const has1 = arr1.filter(x => x === v).length;
        const has2 = arr2.filter(x => x === v).length;
        uni += Math.max(has1, has2);
        int += Math.min(has1, has2);
    })
    if(uni === 0)
        return 1*65536;
    else
        return Math.floor(int/uni*65536);
}