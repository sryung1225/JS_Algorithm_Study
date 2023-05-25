function solution(s) {
    return s.split(" ").map(v => 
        v.split("").map((k, i) =>
           i % 2 === 0 ? k.toUpperCase() : k.toLowerCase()
       ).join("")
    ).join(" ");
}