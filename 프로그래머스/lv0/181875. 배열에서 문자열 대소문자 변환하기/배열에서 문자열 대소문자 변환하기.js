function solution(strArr) {
    return strArr.map((v, i) => i%2 === 0 ? v.toLowerCase() : v.toUpperCase());
}