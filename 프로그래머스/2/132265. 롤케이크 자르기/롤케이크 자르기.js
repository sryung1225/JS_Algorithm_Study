function solution(topping) {
    const setA = new Set();
    const setB = new Set(topping);
    
    const b = {};
    for(let i=0; i<topping.length; i++){
        const t = topping[i];
        if(!b[t]) b[t] = 1;
        else b[t]++;
    }

    let answer = 0;
    for(let i=0; i<topping.length; i++){
        const t = topping[i];
        setA.add(t);
        b[t]--;
        if(b[t] === 0) setB.delete(t);
        
        if(setA.size === setB.size) answer++;
    }

    return answer;
}