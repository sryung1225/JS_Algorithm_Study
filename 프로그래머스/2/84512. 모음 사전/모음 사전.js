function solution(word) {
    const alpha = "AEIOU";
    const size = alpha.length;
    
    let idx = 0;
    let dict = {};
    
    // DFS를 활용하여 사전 만들기
    function dfs(now, cnt) {
        if(cnt > size) return;
        dict[now] = idx++; // 현재 단어와 그 인덱스 저장
        for(let i=0; i<size; i++){ // 각 알파벳을 추가하여 새로운 단어 생성
            let next = now + alpha[i];
            dfs(next, cnt + 1); // 재귀를 이용하여 다음 단어 생성
        }
    }
    
    dfs("", 0);
    
    return dict[word];
}