function solution(clothes) {
    let types = {};
    clothes.forEach(v => {
        if(!types[v[1]]){
            types[v[1]] = [v[0]];
        } else {
            types[v[1]].push(v[0]);
        }
    })
    // console.log(types);
    // {"headgear":["yellow_hat","green_turban"],
    //  "eyewear":["blue_sunglasses"]}
    
    let answer = 1;
    for (const [key, value] of Object.entries(types)) {
        answer *= (value.length + 1);
    }
    return answer - 1; // -1은 아무것도 착용안한 경우
}