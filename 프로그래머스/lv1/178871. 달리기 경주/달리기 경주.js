function solution(players, callings) {
    // {이름: 등수} 형태 객체 objP
    let objP = {};
    players.forEach((v, i) => {
        objP[v] = i+1;
    });
    
    // 호명된 선수(v)가 추월할 선수(front)를 찾아 등수 변경
    callings.forEach(v => {
        let rank = objP[v]; // 현재 등수
        let front = players[rank-2]; // 추월할 선수
        objP[v] = rank-1;
        objP[front] = rank;
        players[rank-1] = front;
        players[rank-2] = v;
    })
    
    return players;
}