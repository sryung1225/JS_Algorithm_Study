function solution(start, end) {
    return Array.from(
        {length: end-start+1}, // 유사배열 - 크기를 지정
        () => start++
    );
}