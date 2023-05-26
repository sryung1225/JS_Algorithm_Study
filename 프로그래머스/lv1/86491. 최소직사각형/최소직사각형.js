function solution(sizes) {
    sizes = sizes.map(v => v.sort((a, b) => a - b));
    let w = 0;
    let h = 0;
    for(let [a, b] of sizes){
        if(a > w) w = a;
        if(b > h) h = b;
    }
    return w*h;
}