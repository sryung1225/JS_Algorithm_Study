function solution(name, yearning, photo) {
    let answer = [];
    photo.forEach((p) => {
        let sum = 0;
        p.forEach((i) => {
            let idx = name.indexOf(i);
            if(idx !== -1)
                sum += yearning[idx];
        })
        answer.push(sum);
    })
    return answer;
}