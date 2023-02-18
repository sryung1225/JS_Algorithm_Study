function solution(a, b) {
    const dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 2016이 윤년이므로 2월 29일 존재
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    let days = 1; // 누적 일자를 담을 days
    
    // 총 일자 계산
    for(let i=0; i<a-1; i++) days += dayOfMonth[i];
    days += b;
    
    // 1/1이 금요일인 것을 감안해 요일 배열을 일요일부터 탐색하도록 +3 해준 뒤, 일주일로 나눔
    days=(days + 3)%7;
    
    return dayOfWeek[days];
}