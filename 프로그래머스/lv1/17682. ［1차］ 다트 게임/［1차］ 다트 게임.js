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