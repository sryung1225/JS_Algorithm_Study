function solution(rny_string) {
    return [...rny_string].map(v => v === "m" ? "rn" : v).join("");
}