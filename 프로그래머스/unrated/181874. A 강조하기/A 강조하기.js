function solution(myString) {
    return [...myString].map(v => ["a", "A"].includes(v) ? "A" : v.toLowerCase()).join("");
}