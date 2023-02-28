function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }    
    s.delete(1);
    s.add(2);
    // console.log(s); // ? Set(n) { 2, 3, 5, 7, 9, 11, 13, ... }
    
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
        // console.log(s); // ? Set(n) { 2, 3, 5, 7, 11, 13, ... }
    }
    return s.size;
}