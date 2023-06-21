function solution(arr) {
    let user = {}; // uid: name
    let answer = [];
    arr.forEach((v, i) => {
        v = v.split(" ");
        if(v[2]){
            user[v[1]] = v[2];
        }
    })
    arr.forEach(v => {
        v = v.split(" ");
        if(v[0] === "Enter"){
            answer.push(`${user[v[1]]}님이 들어왔습니다.`);
        } else if(v[0] === "Leave"){
            answer.push(`${user[v[1]]}님이 나갔습니다.`);
        }
    })
    return answer;
}