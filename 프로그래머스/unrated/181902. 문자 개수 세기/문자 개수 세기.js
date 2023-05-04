function solution(my_string) {
    let answer = [];
    let alphaB = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                 "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let alphaS = alphaB.map(v => v.toLowerCase());
    const alpha = [...alphaB, ...alphaS];
    
    for(let i of alpha){
        let arr = [...my_string].filter(v => v !== i);
        answer.push(my_string.length - arr.length);
    }
    return answer;
}