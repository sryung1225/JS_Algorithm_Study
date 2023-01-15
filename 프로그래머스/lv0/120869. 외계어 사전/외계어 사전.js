function solution(spell, dic) {
    for (let i of dic){
        let count = 0;
        let word = new Array(...i);
        for (let j of spell){
            if(word.includes(j)) count++;
        }
        if(count === spell.length) return 1;
    }
    return 2;
}