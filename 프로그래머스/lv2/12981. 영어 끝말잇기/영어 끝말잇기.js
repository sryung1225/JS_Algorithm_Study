function solution(n, words) {
    let answer = [];
    let stack = [words[0]];
    for(let i=1; i<words.length; i++){
        stack.push(words[i]);
        if(stack[i-1].slice(-1) !== stack[i].slice(0, 1)
          || stack.indexOf(words[i]) !== i)
            return [(i%n)+1, Math.ceil((i+1)/n)];
    }
    return [0, 0];
}