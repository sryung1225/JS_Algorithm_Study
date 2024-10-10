function solution(want, number, discount) {
    // 구매하고 싶은 물품과 갯수 할당
    const obj = {};
    want.forEach((item, index) => {
        obj[item] = number[index];
    })
    
    // 10일치 우선 계산
    discount.slice(0, 10).forEach((item) => {
        if(obj[item] !== undefined) obj[item]--;
    });
    
    // 순환하면서 계산 진행. 모든 항목을 구매할 수 있는 날 계산
    let answer = 0;
    for(let i=0; i<=discount.length - 10; i++){
        if(Object.values(obj).every((value) => value <= 0)) answer++;
        if(obj[discount[i]] !== undefined) obj[discount[i]]++; // 할인에서 제외
        if(obj[discount[i+10]] !== undefined) obj[discount[i+10]]--; // 할인에서 추가
    }
    return answer;
}