function solution(k, dungeons) {
    let answer = 0;
    
    // 탐험한 던전을 체크하기 위한 배열 초기화
    const check = Array(dungeons.length ).fill(false);

    // 2. 재귀함수를 이용해 완전탐색(DFS:깊이우선탐색) 진행
    function dfs(currentHp, depth){
        // 4. 현재 탐험한 던전 수를 최대값과 비교하여 최대 던전 수 업데이트
        answer = Math.max(answer, depth);
        
        // 3. 모든 던전을 탐험하는 경우를 검사
        for(let i=0; i<dungeons.length; i++){
            const [minHp, useHp] = dungeons[i];
            // 현재 피로도 확인 후 던전 탐색
            if(!check[i] && currentHp >= minHp) {
                check[i] = true; // 던전 탐험 표시
                dfs(currentHp-useHp, depth+1); // 다음 던전으로 이동 : 탐험 횟수, 남은 피로도 업데이트
                check[i] = false; // 던전 탐험 완료 표시 : 원복
            }
        }
    }

    dfs(k, 0); // 시작 피로도와 탐험 깊이 0으로 재귀함수 실행
    return answer;
}