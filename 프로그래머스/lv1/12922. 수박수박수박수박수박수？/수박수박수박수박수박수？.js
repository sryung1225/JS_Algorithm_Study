function solution(n) {
    // repeat은 정수만 받음 : 내림됨 (1.5 -> 1)
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}