const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function splitWord(str) {
    const words = [];
    for(let i=0; i<str.length-1; i++){
        if(!alphabets.includes(str[i]) || !alphabets.includes(str[i+1]))
            continue;
        words.push(str[i].toUpperCase() + str[i+1].toUpperCase());
    }
    return words;
}

function solution(str1, str2) {
    const arr1 = splitWord(str1);
    let arr2 = splitWord(str2);
    
    if(arr1.length === 0 && arr2.length === 0) 
        return 65536;
    
    let uni = 0;
    let int = 0;
    arr1.forEach((set) => {
        uni++;
        const index = arr2.indexOf(set);
        if(index !== -1){
            arr2.splice(index, 1);
            int++;
        }
    })
    uni += arr2.length;
    
    let answer = Math.floor(int / uni * 65536);
    return answer;
}