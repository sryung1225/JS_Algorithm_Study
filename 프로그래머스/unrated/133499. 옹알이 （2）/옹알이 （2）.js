function solution(babbling) {
    let answer = 0;
    const word = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(str => {
        for(let i=0; i<word.length; i++){
            str = str.split(word[i]).join(i+1);
        }
        if(/^[1-4]+$/.test(str) && !(/(11|22|33|44)/g.test(str))) answer++;
    })
    return answer;
}