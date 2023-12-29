function solution(a, b){
    const 요일 = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const 일수 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let days = (a === 1 ? 0 : 일수.slice(0, a-1).reduce((acc, cur) => acc + cur, 0)) + b;
    
    return 요일[(days + 4) % 7];
}