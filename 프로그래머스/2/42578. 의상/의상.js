function solution(clothes) {
    const obj = {};
    clothes.forEach(([name, type]) => {
        if(!obj[type]) obj[type] = [];
        obj[type].push(name);
    })
    let answer = 1;
    Object.keys(obj).forEach((type) => {
        answer *= (obj[type].length + 1);
    }) 
    return answer - 1;
}