function solution(s) {
    return s.split(" ").map(v => {
       v = v.split("").map((k, i) => {
           if(i % 2 === 0)
               k = k.toUpperCase();
           else
               k = k.toLowerCase();
           return k;
       }).join("");
        return v;
    }).join(" ");
}