function solution(dartResult) {
    // 정규표현식 + 객체 조합
    const bonus = { 'S': 1, 'D': 2, 'T': 3 };
    const options = { '*': 2, '#': -1, undefined: 1 };
    
    // 숫자 기준으로 배열화
    let darts = dartResult.match(/\d.?\D/g);
    // console.log(darts); // ? [ '1S*', '2T*', '3S' ]

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
        let score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
        // console.log(split, score);
        // ? [ '1S*', '1', 'S', '*', index: 0, input: '1S*', groups: undefined ] 2
        // ? [ '2T*', '2', 'T', '*', index: 0, input: '2T*', groups: undefined ] 16
        // ? [ '3S', '3', 'S', undefined, index: 0, input: '3S', groups: undefined ] 3
        
        if (split[3] === '*' && darts[i-1]) 
            darts[i-1] *= options['*'];

        darts[i] = score;
        // console.log(darts);
        // ? [ 2, '2T*', '3S' ]
        // ? [ 4, 16, '3S' ]
        // ? [ 4, 16, 3 ]
    }
    return darts.reduce((a, b) => a + b);
}


// - `점수 | 보너스 | [옵션]` 문자열 중 보너스, 옵션에 해당되는 부분을 `bonus`, `options` 로 각각 객체화
// - 문자열 쪼개기 : `darts` : `dartResult.match(/\d.?\D/g)`
//     - `match` : (메서드) dartResult 에서 정규표현식에 해당되는 항목들을 배열로 반환
//     - `/d.?\D/g`
//         - `\d` : (기호) 숫자(0-9)
//         - `.?`
//             - `.` : (기호) 임의의 한 문자
//             - `?` : (갯수 반복 패턴) 없거나 최대 한개만
//             - 임의의 문자가 0개 또는 1개 존재
//         - `\D` : (기호) 숫자가 아닌것
//         - `g` : (플래그) 문자열 내의 모든 패턴 검색
//         - 임의의 문자가 0개 또는 1개 존재
//     - 숫자와 숫자와 함께 나오는 문자열을 배열의 요소로 받아들임
// - 각 문자열 분석 : `split` : `darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/)`
//     - `/(^\d{1,})(S|D|T)(\*|#)?/`
//         - `(^\d{1,})`
//             - `^` : (검색 기준 패턴) 문자열의 시작
//             - `{1,}` : (갯수 반복 패턴) 최소 1개 이상
//             - 1개 이상의 숫자로 시작
//         - `(S|D|T)` : S 또는 D 또는 T
//         - `(\*|#)?`
//             - `?` : (갯수 반복 패턴) 없거나 최대 1개
//             - * 또는 # 또는 생략
//     - 예시)
//         - **`1S*`** : ["1S*", "1", "S", "*"]
//         - **`2T*`** : ["2T*", "2", "T", "*"]
//         - **`3S`** : ["3S", "3", "S", undefined]
// - 각 문자열 계산 : `score` : `Math.pow(split[1], bonus[split[2]]) * options[split[3]]`
//     - (점수^보너스) x 옵션
//     - 대신에 옵션이 “*” 이면서 이전 문자열이 있는 경우, 이전 문자열을 x2 해줌