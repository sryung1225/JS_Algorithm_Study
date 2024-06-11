function match(w) {
    if(w === ")") return "(";
    if(w === "]") return "[";
    if(w === "}") return "{";
    return false;
}

function solution(s) {
    const arr = s.split("");
    const size = s.length;
    // s의 길이가 짝수인 경우 우선 종료
    if(size % 2 !== 0) return 0;
    let answer = 0;
    
    for(let i=0; i<size; i++){
        let stack = [];
        let stop = false;
        for(let j=0; j<size; j++){
            const w = arr[j];
            const m = match(w);
            if(!m) stack.push(w);
            else if(m && m === stack[stack.length - 1]) stack.pop();
            else {
                stop = true; // 강제 종료 표시
                break;
            }
        }
        if(!stop && stack.length === 0) answer++;
        
        // 왼쪽으로 한 칸 회전
        arr.push(arr.shift());
    }
    return answer;
}



// }]()[{ X
// ]()[{} X
// ()[{}] O
// )[{}]( X
// [{}]() O
// {}]()[ X