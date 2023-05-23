function diff([x1, y1], [x2, y2]){
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}
function solution(numbers, hand) {
    let answer = "";
    const keys = [
        [1, 3],
        [0, 0], [1, 0], [2, 0],
        [0, 1], [1, 1], [2, 1],
        [0, 2], [1, 2], [2, 2],
    ];
    const hands = {
        L: [0, 3],
        R: [2, 3],
    };
    const updateHands = (side, value) => {
        answer += side;
        hands[side] = keys[value];
    }
    for(let v of numbers) {
        if (v % 3 === 1) {
            updateHands("L", v);
        }
        else if (v && v % 3 === 0) {
            updateHands("R", v);
        }
        else if(!v || v % 3) { // 0, 2, 5, 8
            const diffL = diff(hands.L, keys[v])
            const diffR = diff(hands.R, keys[v])
            if(diffL < diffR) {
                updateHands("L", v);
            }
            else if(diffL > diffR){
                updateHands("R", v);
            } else {
                updateHands(hand === "left" ? "L" : "R", v);
            }
        }
    }
    return answer;
}