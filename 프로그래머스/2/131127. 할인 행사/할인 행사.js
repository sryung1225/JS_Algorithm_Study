function solution(want, number, discount) {
    let answer = 0;
    for(let i=0; i<=discount.length - 10; i++){
        const obj = {};
        for(let j=0; j<10; j++){
            if(!obj[discount[i+j]]) obj[discount[i+j]] = 1;
            else obj[discount[i+j]]++;
        }
        let can = true;
        for(let k=0; k<want.length; k++){
            if(!obj[want[k]] || obj[want[k]] < number[k]){
                can = false;
                break;
            }
        }
        if(can) answer++;
    }
    return answer;
}