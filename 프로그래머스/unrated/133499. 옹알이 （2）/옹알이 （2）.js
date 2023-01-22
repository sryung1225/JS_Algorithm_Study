function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/; // regexp1.test(str) : str에 같은 옹알이를 두 번 이상 반복한 경우가 포함되어 있음
    const regexp2 = /^(aya|ye|woo|ma)+$/; // regexp2.test(str) : str이 옹알이들로만 이루어짐

    return babbling.reduce((answer, str) => (
        !regexp1.test(str) && regexp2.test(str) ? ++answer : answer
    ), 0);
}