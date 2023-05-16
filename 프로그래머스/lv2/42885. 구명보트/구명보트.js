function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    
    // 모두가 혼자 타야하는 사례 우선 해결
    if(people[0]+people[1] > limit)
        return people.length;
    
    while(people.length > 0){
        let p = people.pop();
        if(p + people[0] <= limit){
            people.shift();
        }
        answer++;
    }
    return answer;
}