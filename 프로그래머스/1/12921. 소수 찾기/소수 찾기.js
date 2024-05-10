function solution(n) {
    const set = new Set([2]);
    for(let i=3; i<=n; i+=2){
        set.add(i);
    }
    for(let j=3; j<Math.sqrt(n); j++){
        if(set.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                set.delete(k);
             }
        }
    }
    return set.size;
}