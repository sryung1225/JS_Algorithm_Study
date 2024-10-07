function solution(participant, completion) {
    const map = new Map(); // map.set(key, value)
    for (const i in participant) {
        const p = participant[i];
        const c = completion[i];
        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);        
    }
    for (const [key, value] of map) {
        if(value > 0) return key;
    }
}