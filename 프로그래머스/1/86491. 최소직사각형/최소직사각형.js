function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach((size) => {
        size.sort((a, b) => b - a);
        w = Math.max(w, size[0]);
        h = Math.max(h, size[1]);
    })
    let answer = w*h;
    return answer;
}