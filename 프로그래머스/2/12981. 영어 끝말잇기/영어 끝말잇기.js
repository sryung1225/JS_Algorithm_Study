function solution(n, words) {
    const set = new Set();
    let index = 0;
    set.add(words[0]);
    let last = words[0][words[0].length - 1];
    for(let i=1; i<words.length; i++){
        let word = words[i];
        if(last !== word[0] || set.has(word)) {
            index = i+1;
            break;
        }
        set.add(word);
        last = word[word.length - 1];
    }
    let num = index === 0 ? 0 : index % n || n;
    let idx = Math.ceil(index / n);
    return [num, idx];
}