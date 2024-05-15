function solution(n, lost, reserve) {
    const students = new Array(n).fill(1);
    reserve.forEach((num) => students[num-1]++)
    lost.forEach((num) => students[num-1]--)

    students.forEach((count, index) => {
       if(count === 0){
           if(students[index-1] === 2){
               students[index] = 1;
               students[index-1] = 1;
           } else if(students[index+1] === 2){
               students[index] = 1;
               students[index+1] = 1;
           }
       } 
    })
    const answer = students.filter((num) => num !== 0).length;
    return answer;
}