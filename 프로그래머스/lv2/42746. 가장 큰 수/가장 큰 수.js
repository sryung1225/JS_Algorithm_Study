function solution(numbers) {
    // 오름차순 정렬
    let answer = numbers.sort((a, b) => {
        a+="";
        b+="";
        return +(b+a) - +(a+b);
    }).join("");
    // ex) [30, 311] => 31130 30311 비교해서 양수 => [311, 30]
    
    return answer[0] === "0" ? "0" : answer; // [0, 0, 0] 대응
}