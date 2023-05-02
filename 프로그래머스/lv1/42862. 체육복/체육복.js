function solution(n, lost, reserve) {
    // 여벌을 가져왔는데 도난도 당한 학생 경우 제거 : filter
    const lostStu = lost.sort((a,b)=>a-b).filter(v => !reserve.includes(v)); // 도난당한 학생 배열
    let reseStu = reserve.sort((a,b)=>a-b).filter(v => !lost.includes(v));   // 여벌있는 학생 배열
    // console.log(lostStu, reseStu);
    
    let stu = lostStu.filter((lost) => { // 도난당한 학생 한명씩 확인
        const lend = reseStu.find(v => Math.abs(v-lost) === 1); // 체육복 빌려줄 수 있는 사람 찾기
        if(lend)
            reseStu = reseStu.filter(v => v !== lend); // 찾으면, 빌려준 학생을 목록에서 제외
        else
            return lost; // 못찾으면, 다음 차례로
    })
    return n - stu.length; // 전체 학생 수 - 체육복이 없는 학생 수
}