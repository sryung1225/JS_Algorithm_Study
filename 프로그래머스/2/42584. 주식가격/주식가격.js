function solution(prices) {
    const sec = prices.length;
    let answer = new Array(sec).fill(0); // 가격이 떨어지지 않은 기간을 저장할 배열
    
    const stack = []; // 이전/현재 가격을 비교할 스택
    prices.forEach((price, index) => {
        while(stack.length > 0 && prices[stack[stack.length - 1]] > price){
            // 가격 하락 감지
            const i = stack.pop();
            answer[i] += index - i; // 가격 유지 기간 계산
        }
        stack.push(index);
    })

    // 하락 없이 계속 유지한 가격들의 유지 기간 계산
    answer = answer.map((num, index) => num ? num : sec - index - 1);
    
    return answer;
}