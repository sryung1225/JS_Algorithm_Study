function solution(myString) {
    return [...myString].map(v => v === "a" ? "A" : v !== "A" && v === v.toUpperCase() ? v.toLowerCase() : v).join("");
}