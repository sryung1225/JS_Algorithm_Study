function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = days.slice(0, a).reduce((acc, cur) => acc + cur, 0) + b;
    let answer = day[(sum + 4) % 7];
    return answer;
}