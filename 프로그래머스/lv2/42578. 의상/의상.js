function solution(clothes) {
    let types = clothes.reduce((obj, v)=> {
        obj[v[1]] = (obj[v[1]] || 0) + 1;
        return obj;
    }, {});
    // console.log(types);
    // { headgear: 2, eyewear: 1 }
    
    types = Object.values(types);
    // console.log(types);
    // [2, 1]
    
    let answer = types.reduce((acc, cur)=> acc*(cur+1), 1);
    return answer - 1;
}