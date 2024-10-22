function solution(clothes) {
    const types = {};
    clothes.forEach(([name, type]) => {
        types[type] = (types[type] || 0) + 1;
    })
    let answer = 1;
    Object.values(types).forEach((count) => {
        answer *= (count + 1);
    })
    return answer - 1;
}