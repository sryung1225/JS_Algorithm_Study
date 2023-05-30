function solution(s) {
    const WORD = ["zero", "one", "two", "three", "four", 
              "five", "six", "seven", "eight", "nine"];
    for(let i=0; i<=9; i++){
        s = s.split(WORD[i]).join(i);
    }
    return +s;
}