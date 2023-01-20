function solution(score) {
    return score.map(el => {
        return (
            score.filter(v => v[0]+v[1] > el[0]+el[1]).length + 1
        );
    });
}

// score.map(el => { ~ }); : score 배열을 { ~ } 로 변경 예정
// score.filter(v => 조건) : score 배열에서 조건을 만족하는 true인 값만 반환 예정
// score.filter(v => v[0]+v[1] > el[0]+el[1]) : score 첫번째 값부터 갖고, 그것보다 큰 값이 존재하면 그 값을 배열로 저장
//// ex) el=[80, 70] : score=[[90, 100],[100, 90],[100, 100]]
// length + 1 : (위 score의 길이 + 1) = 등수
//// score는 등수로 이루어진 배열이 됨