function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const minTime = attacks[0][0];
    attacks.reverse();
    const maxTime = attacks[0][0];
    let life = health;
    let stack = 0;

    for(let i=minTime; i<=maxTime; i++){
        if(i === attacks[attacks.length - 1][0]){
            life -= attacks[attacks.length - 1][1];
            if(life <= 0) break;
            attacks.pop();
            stack = 0;
        } else if(stack < t) {
            life = Math.min(life + x, health);
            stack++;
            if(stack === t) {
                life = Math.min(life + y, health);
                stack = 0;
            }
        }
    }
    return life <= 0 ? -1 : life;
}