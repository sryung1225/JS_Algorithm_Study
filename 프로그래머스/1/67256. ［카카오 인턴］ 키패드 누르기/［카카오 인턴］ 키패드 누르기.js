function solution(numbers, hand) {
    const keys = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
    let posL = [3, 0];
    let posR = [3, 2];  
    let answer = '';
    function pressLeft(arr) {
        answer += "L";
        posL = arr;
    }
    function pressRight(arr) {
        answer += "R";
        posR = arr;
    }
    
    numbers.forEach((number) => {
        const pos = keys[number];
        if(number % 3 === 1) pressLeft(pos);
        else if(number !== 0 && number % 3 === 0) pressRight(pos);
        else {
            const stackL = Math.abs(posL[0] - pos[0]) + Math.abs(posL[1] - pos[1]);
            const stackR = Math.abs(posR[0] - pos[0]) + Math.abs(posR[1] - pos[1]);
            if(stackL > stackR) {
                pressRight(pos);
            } else if(stackL < stackR) {
                pressLeft(pos);
            } else {
                if(hand === "right") pressRight(pos);
                else pressLeft(pos);
            }
        }
    })
    return answer;
}