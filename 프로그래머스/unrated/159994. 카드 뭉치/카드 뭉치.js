function solution(cards1, cards2, goal) {
    while(goal.length !== 0) {
        if(goal[0] === cards1[0]){
            goal.shift();
            cards1.shift();
        } else if(goal[0] === cards2[0]){
            goal.shift();
            cards2.shift();
        } else {
            return "No";
        }
        // console.log(cards1, cards2, goal);
    }
    return "Yes";
}