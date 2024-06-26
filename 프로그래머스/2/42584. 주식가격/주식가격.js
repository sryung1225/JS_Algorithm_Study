function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = []; // 하락하지 않은 가격의 인덱스들
    
    for(let i=0; i<prices.length; i++){
        const price = prices[i]; // 현재 가격
        // 아직 하락하지 않는 가격들이 있으면서
        // 그 가격들이 현재 가격보다 높은 가격일 때 (= 지금 하락했을 때)
        while(stack.length > 0 && prices[stack[stack.length - 1]] > price){
            const idx = stack.pop();
            answer[idx] = i - idx; // 현재 인덱스 - 하락 시작 인덱스 (= 가격 유지 시간)
        }
        stack.push(i); // 현재 인덱스 저장
    }
    
    // 스택에 남은 인덱스 = 끝까지 가격을 방어한 인덱스들
    while (stack.length > 0) {
        const idx = stack.pop();
        answer[idx] = prices.length - 1 - idx; // 최대 시간 부여
    }
    return answer;
}