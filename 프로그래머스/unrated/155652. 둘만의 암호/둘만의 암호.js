function solution(s, skip, index) {
    let words = "abcdefghijklmnopqrstuvwxyz";
    words = [...words].filter(v => ![...skip].includes(v));
    
    return [...s].map(v => words[(words.indexOf(v) + index) % words.length]).join("");
}