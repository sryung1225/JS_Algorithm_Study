function solution(clothes) {
    const wear = {};
    clothes.forEach((c) => {
        const [name, type] = c;
        if(!wear[type]) wear[type] = 1;
        else wear[type]++;
    })
    let answer = Object.values(wear).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    return answer;
}