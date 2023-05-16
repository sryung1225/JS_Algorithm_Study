function solution(myString) {
    const asciiL = "l".charCodeAt();
    return [...myString].map(v => v.charCodeAt() < asciiL ? "l" : v).join("");
}