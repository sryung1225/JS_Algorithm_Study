function solution(clothes) {
    let types = {};
    clothes.forEach(v => {
        types[v[1]] = (types[v[1]] || 0) + 1;
    })
    // console.log(types);
    // { headgear: 2, eyewear: 1 }
    
    let answer = 1;
    for(let key in types){
        answer *= (types[key] + 1);
    }
    return answer - 1;
}