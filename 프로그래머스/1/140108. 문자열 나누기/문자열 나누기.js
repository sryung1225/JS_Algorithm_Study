function solution(s) {
    let answer = 0;
    for(let i=0; i<s.length; i++){
        const x = s[i];
        let [y, n, index] = [1, 0, 0];
        for(let j=i+1; j<s.length; j++){
            if(x === s[j]) y++;
            else n++;
            if(y === n) {
                index = j;
                break;
            }
        }
        answer++;
        if(index === 0) break;
        i = index; 
    }    
    return answer;
}