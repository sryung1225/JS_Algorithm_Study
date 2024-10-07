function solution(participant, completion) {
    const obj = {};
    for (const p of participant){
        obj[p] = obj[p] ? obj[p] + 1 : 1; 
    }
    for (const c of completion){
        if(obj[c] > 0) obj[c]--;
    }
    for (const key in obj) {
        if(obj[key] > 0) return key;
    }
}