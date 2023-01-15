function solution(spell, dic) {
    // return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
    let answer = dic.filter(v => spell.every(c => v.includes(c)));
    //console.log(answer);
    
    if(answer.length) return 1;
    else return 2;
    
}