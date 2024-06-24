function solution(word) {
    const alpha = "AEIOU";
    const size = alpha.length;
    
    const weights = [];
    let weight = 0;
    for (let i=0; i<size; i++) {
        weight = weight * size + 1;
        weights.push(weight);
    }
    weights.reverse(); // [781, 156, 31, 6, 1]
    
    let answer = 0;
    
    for (let i=0; i < word.length; i++) {
        const idx = alpha.indexOf(word[i]);
        answer += idx * weights[i] + 1;
    }
    
    return answer;
}