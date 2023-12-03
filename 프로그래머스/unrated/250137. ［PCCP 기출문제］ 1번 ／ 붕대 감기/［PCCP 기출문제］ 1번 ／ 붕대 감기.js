function solution(bandage, health, attacks) {
    let answer = health - attacks[0][1];
    const [t, x, y] = bandage;
    
    for(let i=1; i<attacks.length; i++){
        const times = attacks[i][0] - attacks[i-1][0] - 1;
        if(times >= t){
            answer += y*(Math.floor(times / t)); 
        }
        answer += x*times;
        answer = (answer > health) ? health : answer;
        answer -= attacks[i][1];
        if(answer <= 0){
            answer = -1;
            break;
        }   
    }
    return answer;
}


// t x y