function solution(date1, date2) {
    let dates1 = date1[0]*12 + date1[1]*31 + date1[2];
    let dates2 = date2[0]*12 + date2[1]*31 + date2[2];
    return dates1 < dates2 ? 1 : 0;
}