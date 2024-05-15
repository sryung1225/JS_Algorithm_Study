function solution(today, terms, privacies) {
    const [year, month, date] = today.split(".").map(Number);
    const todayDates = (year-1)*12*28 + (month-1)*28 + date;
    const term = {};
    terms.forEach((t) => {
        const [type, months] = t.split(" ");
        term[type] = Number(months);
    })
    let answer = [];
    privacies.forEach((p, i) => {
        const [date, type] = p.split(" ");
        const [y, m, d] = date.split(".").map(Number);
        const dates = (y-1)*12*28 + (m-1)*28 + d;
        const endDates = dates + term[type]*28;
        if(endDates <= todayDates) answer.push(i+1);
    })
    return answer;
}

// "2022.05.19"
// ["A 6", "B 12", "C 3"]
// ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
// [1, 3]