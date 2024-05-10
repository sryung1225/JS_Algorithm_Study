function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    babbling.forEach((bab) => {
        for(let i=0; i<words.length; i++){
            bab = bab.split(words[i]).join(i+1);
        }
        let isNum = true;
        let prev = 0;
        for(let j=0; j<bab.length; j++){
            if(isNaN(Number(bab[j])) || bab[j] === prev){
                isNum = false;
                break;
            }
            prev = bab[j];
        }
        if(isNum) answer++;
    })
    return answer;
}