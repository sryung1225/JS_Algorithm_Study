function isOneLetterDifferent(word1, word2){
    let diffCount = 0;
    for(let i=0; i<word1.length; i++){
        if(word1[i] !== word2[i]) diffCount++;
        if(diffCount > 1) return false;
    }
    return diffCount === 1;
}

function solution(begin, target, words) {
    const queue = [[begin, 0]];
    let visited = new Set();
    visited.add(begin);
    
    while(queue.length > 0){
        const [currentWord, steps] = queue.shift();
        if(currentWord === target) return steps;
        for(let word of words){
            if(!visited.has(word) && isOneLetterDifferent(currentWord, word)){
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        }
    }
    return 0;
}