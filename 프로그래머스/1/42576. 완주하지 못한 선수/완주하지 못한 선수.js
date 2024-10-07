function solution(participant, completion) {
    participant.sort();
    completion.sort();
    while(participant.length > 0){
        const p = participant.pop();
        const c = completion.pop();
        if(p !== c) return p;
    }
}