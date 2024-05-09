function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let [idx1, idx2] = [0, 0];
    for(let i=0; i<goal.length; i++){
        if(cards1[idx1] === goal[i]) idx1++;
        else if(cards2[idx2] === goal[i]) idx2++;
        else {
            answer = "No";
            break;
        }
    }
    return answer;
}