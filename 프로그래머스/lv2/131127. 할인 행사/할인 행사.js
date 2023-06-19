function solution(want, number, discount) {    
    let answer = 0;
    for(let i=0; i<=discount.length-10; i++){
        let dis = discount.slice(i, i+10);
        let check = true;
        for(let j=0; j<want.length; j++){
            let count = dis.filter(v => v === want[j]).length;
            if(count < number[j]){
                check = false;
                break;
            }
        }
        if(check){
            answer++;
        }
    }
    return answer;
}