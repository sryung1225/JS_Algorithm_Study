function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let [index1, index2] = [0, 0];
    for(let word of goal){
        if(word === cards1[index1]) index1++;
        else if(word === cards2[index2]) index2++;
        else {
            answer = "No";
            break;
        }
    }
    return answer;
}