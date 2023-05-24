function solution(n) {
    let answer = 1;
    for(let a=1; a<=Math.floor(n/2); a++){
        let b = Math.floor(Math.sqrt(2*n + a*(a-1)));
        if(b*(b+1) - a*(a-1) === 2*n){
            answer++;
            // let map = [];
            // for(let i=a; i<=b; i++) map.push(i);
            // console.log(map)
        }    
    }
    // ? [ 1, 2, 3, 4, 5 ]
    // ? [ 4, 5, 6 ]
    // ? [ 7, 8 ]
    return answer;
}