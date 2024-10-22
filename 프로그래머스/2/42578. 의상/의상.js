function solution(clothes) {
    const types = {};
    clothes.forEach(([name, type]) => {
        if(!types[type]) types[type] = [];
        types[type].push(name);
    })
    let answer = 1;
    Object.entries(types).forEach(([_, name]) => {
        answer *= (name.length + 1);
    })
    return answer - 1;
}