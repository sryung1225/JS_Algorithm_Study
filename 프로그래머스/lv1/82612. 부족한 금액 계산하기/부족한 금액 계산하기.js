function solution(price, money, count) {
    return money - (1+count)*count/2*price < 0 ? (1+count)*count/2*price - money : 0;
}