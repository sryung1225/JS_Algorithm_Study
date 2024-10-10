const MESSAGE = {
    IN: "님이 들어왔습니다.",
    OUT: "님이 나갔습니다."
}

// ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
function solution(record) {
    const user = {};
    const recordArr = [];
    // 이름 변경 감지 + record 세분화
    record.forEach((reco) => {
        const [action, uid, name] = reco.split(" ");
        if(action === "Enter" || action === "Change")
            user[uid] = name;
        if(action === "Enter" || action === "Leave")
            recordArr.push([action, uid]);
    })
    const answer = [];
    recordArr.forEach((reco) => {
        const [action, uid] = reco;
        if(action === "Enter")
            answer.push(`${user[uid]}${MESSAGE.IN}`);
        else if(action === "Leave")
            answer.push(`${user[uid]}${MESSAGE.OUT}`);
    });
    return answer;
}