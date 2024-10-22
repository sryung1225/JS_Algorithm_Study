function solution(clothes) {
    const types = clothes.reduce((obj, [_, type]) => {
        obj[type] = (obj[type] || 0) + 1;
        return obj;
    }, {});
    let answer = Object.values(types).reduce((acc, cur) => acc * (cur + 1), 1);
    return answer - 1;
}