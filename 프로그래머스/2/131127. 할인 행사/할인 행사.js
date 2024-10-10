function solution(want, number, discount) {
    // 구매하고 싶은 물품과 갯수 할당
    const wantObj = {}
    want.forEach((item, index) => {
        wantObj[item] = number[index];
    })
    const wantKey = Object.keys(wantObj);
    
    // 할인 첫날부터 10일 동안의 할인 물품과 갯수 할당
    const discountObj = {}
    discount.slice(0, 10).forEach((item, index) => {
        discountObj[item] = (discountObj[item] || 0) + 1;
    })
    
    // 순환하면서 계산 진행. 모든 항목을 구매할 수 있는 날 계산
    let answer = 0;
    for(let i=0; i<=discount.length-10; i++) {
        let check = true;
        for(const key of wantKey) {
            if((discountObj[key] || 0) < wantObj[key]){
                check = false;
                break;
            }
        }
        if(check) answer++;
        
        const prev = discount[i];
        if(discountObj[prev] !== undefined) {
            discountObj[prev]--;
            if(discountObj[prev] === 0) delete discountObj[prev];
        }
        const next = discount[i+10];
        discountObj[next] = (discountObj[next] || 0) + 1;
    }
    return answer;
}