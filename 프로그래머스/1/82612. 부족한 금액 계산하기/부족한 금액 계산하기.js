function solution(price, money, count) {
    let answer = money - (1+count)*count/2*price;
    return answer < 0 ? -answer : 0;
}