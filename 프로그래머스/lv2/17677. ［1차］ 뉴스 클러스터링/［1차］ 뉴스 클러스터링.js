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
    let arr1 = cutWord(str1);
    let arr2 = cutWord(str2);
    
    let max = arr1.length+arr2.length;
    if(max === 0)
        return 1*65536;
    let hab = 0;
    arr1.forEach(v => {
        if(arr2.includes(v)){
            hab++;
            let idx = arr2.indexOf(v);
            arr2 = arr2.slice(0, idx).concat(arr2.slice(idx+1));
        }
    })
    return Math.floor((hab/(max-hab))*65536);
}