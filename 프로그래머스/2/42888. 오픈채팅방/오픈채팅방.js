function solution(record) {
    const user = {};
    const answer = [];
    // 유저 uid 변경 감지
    record.forEach((reco) => {
        const [action, uid, name] = reco.split(" ");
        if(action === "Enter" || action === "Change")
            user[uid] = name;
        if(action === "Enter" || action === "Leave")
            answer.push([action, uid]);
    })
    // 메세지 작성
    return answer.map((value) => {
        const [action, uid] = value;
        if(action === "Enter") return `${user[uid]}님이 들어왔습니다.`;
        else if(action === "Leave") return `${user[uid]}님이 나갔습니다.`;
    });
}