function solution(arr)
{
    const answer = [];
    arr.forEach((num) => {
        if(num !== answer[answer.length - 1]){
            answer.push(num);
        }
    })
    return answer;
}