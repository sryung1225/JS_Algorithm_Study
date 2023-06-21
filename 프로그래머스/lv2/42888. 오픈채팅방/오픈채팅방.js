function solution(arr) {
    const user = {}; // uid: name
    const stateSentense = {
        "Enter": "님이 들어왔습니다.",
        "Leave": "님이 나갔습니다."
    };
    let answer = [];
    arr.forEach(v => {
        v = v.split(" ");
        if(v[2]){
            user[v[1]] = v[2];
        }
        if(v[0] === "Enter" || v[0] === "Leave"){
            answer.push(v.slice(0, 2));
        }
    })
    return answer.map(v => user[v[1]] + stateSentense[v[0]]);
}