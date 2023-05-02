function solution(n, lost, reserve) {
    let answer = 0;
    const students = new Array(n).fill(1);
    lost.forEach(v => students[v-1] -= 1);
    reserve.forEach(v => students[v-1] += 1);

    for(let i=0; i<n; i++){
        if(students[i] === 2 && students[i-1] === 0){
            students[i-1]++;
            students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
            students[i+1]++;
            students[i]--;
        }
    }
    // console.log(students);
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}