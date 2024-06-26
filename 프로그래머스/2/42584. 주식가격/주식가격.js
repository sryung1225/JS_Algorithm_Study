function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    prices = prices.slice(0, prices.length - 1);
    
    for(let i=0; i<prices.length; i++){
        for(let j=i; j<prices.length; j++){
            if(prices[i] <= prices[j]) {
                answer[i]++;
            } else {
                break;
            }
        }
    } 
    return answer;
}