// 해시의 특성을 가장 잘 살린 풀이라는 평

// 입력 예시
// ["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    
    // map에 새로운 객체 추가 : map.set(key, value) 형태
    const map = new Map();
    
    // map에 참가자와 완주자를 순서대로 추가하면서
    // 처음 추가되는 사람이면 value 값으로 1, -1 을 각각 가지도록 하며
    // 만일 이전에 존재하던 사람이 추가되면 value 값을 0으로 수정
        // 완주자에 성령이 0명인데, 참가자로만 2명의 성령이 등장한 경우 (동명이인 예시)
        // 혼동이 없도록 +1, -1 하는 방식으로 진행한 것. '성령' => 2
    for(let i in participant) {
        let a = participant[i];
        let b = completion[i];
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
        // console.log(map);
        // ? Map(2) { 'mislav' => 1, 'stanko' => -1 }
        // ? Map(3) { 'mislav' => 1, 'stanko' => 0, 'ana' => -1 }
        // ? Map(3) { 'mislav' => 1, 'stanko' => 0, 'ana' => -1 }
        // ? Map(4) { 'mislav' => 1, 'stanko' => 0, 'ana' => 0, undefined => -1 }
    }
    
    // 0이 되지 못한, 미완주자(value가 1) 색출
    for(let [k, v] of map) {
        if(v > 0) return k;
    }
}