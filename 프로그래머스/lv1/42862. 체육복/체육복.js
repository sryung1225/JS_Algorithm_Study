function solution(n, lost, reserve) {
    // 학생 배열 students : index = 번호-1 , value = 체육복의 수
    let students = new Array(n).fill(1);
    
    lost.forEach(v => students[v-1]--);
    reserve.forEach(v => students[v-1]++);
    students.forEach((v, i) => {
        if(v === 0 && students[i-1] === 2){
            students[i-1]--;
            students[i]++;
        } else if (v === 0 && students[i+1] === 2){
            students[i+1]--;
            students[i]++;
        }
    })
    
    return students.filter(v => v).length;
}