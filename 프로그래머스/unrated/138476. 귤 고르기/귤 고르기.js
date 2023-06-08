function solution(k, tangerine) {
    let objT = {}; // {귤의 크기: 귤의 갯수} 객체 objT
    tangerine.forEach(v => {
        if(!objT[v])
            objT[v] = 1;
        else
            objT[v]++;
    })
    // [귤의 크기: 귤의 갯수] 배열 arrT 를 갯수 내림차순으로 정렬
    let arrT = Object.entries(objT).sort((a, b) => b[1] - a[1]);
    // 많은 갯수를 가진 크기부터 확인하며 귤의 총 갯수 합산
    let [sum, idx] = [0, 0];
    while(sum < k){
        idx++;
        sum += arrT[idx-1][1];
    }
    return idx;
}