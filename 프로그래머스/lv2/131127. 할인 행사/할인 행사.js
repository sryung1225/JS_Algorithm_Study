function solution(want, number, discount) {
    const wantObj = {};
    want.forEach((v, i) => {
        wantObj[v] = number[i];
    })
    
    let answer = 0;
    for(let i=0; i<=discount.length-10; i++){
        const dis = discount.slice(i, i+10);
        const disObj = {};
        dis.forEach(v => {
            if(!disObj[v]){
                disObj[v] = 1;
            } else {
                disObj[v]++;
            }
        })
        
        let check = 0;
        for(let item in wantObj){
            if(!disObj[item] || wantObj[item] > disObj[item]){
                break;
            } else {
                check++;
            }
        }
        if(check === want.length){
            answer++;
        }
    }
    return answer;
}