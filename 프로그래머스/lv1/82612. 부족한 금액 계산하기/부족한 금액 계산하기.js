function solution(price, money, count) {
    let sumPrice = 0;
    for(let i=1; i<=count; i++){
        sumPrice += price*i;
    }
    return money - sumPrice < 0 ? sumPrice - money : 0;
}