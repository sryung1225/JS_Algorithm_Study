function solution(n)
{
    let answer = 0;
    n.toString().split("").forEach(num => answer += Number(num));
    return answer;
}