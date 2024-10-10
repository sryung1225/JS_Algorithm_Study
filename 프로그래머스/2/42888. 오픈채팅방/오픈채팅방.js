function solution(record) {
    const user = {};
    const recordArr = [];
    // 유저 uid 변경 감지
    record.forEach((reco) => {
        const [action, uid, name] = reco.split(" ");
        if(action === "Enter" || action === "Change")
            user[uid] = name;
        if(action === "Enter" || action === "Leave")
            recordArr.push([action, uid]);
    })
    // 메세지 작성
    const answer = [];
    recordArr.forEach((reco) => {
        const [action, uid] = reco;
        if(action === "Enter")
            answer.push(`${user[uid]}님이 들어왔습니다.`);
        else if(action === "Leave")
            answer.push(`${user[uid]}님이 나갔습니다.`);
    });
    return answer;
}