function diff(a, b) {
    return Math.abs(a-b)%3 + Math.floor(Math.abs(a-b)/3);
}
function solution(numbers, hand) {
    let answer = '';
    let hands = [10, 12];
    numbers.forEach(v => {
        if(v === 0) v = 11;
        if(v % 3 === 1){
            answer += "L";
            hands[0] = v;
        } else if(v % 3 === 0){
            answer += "R";
            hands[1] = v;
        } else { // v % 3 === 2
            let diffL = diff(hands[0], v);
            let diffR = diff(hands[1], v);
            if(diffL < diffR || (diffL === diffR && hand === "left")){
                answer += "L";
                hands[0] = v;
            } else {
                answer += "R";
                hands[1] = v;
            }
        }
    });
    return answer;
}