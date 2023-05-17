function solution(myString, pat) {
    let arr = [...myString].map(v => v === "A" ? "B" : "A").join("");
    return arr.includes(pat) ? 1 : 0;
}