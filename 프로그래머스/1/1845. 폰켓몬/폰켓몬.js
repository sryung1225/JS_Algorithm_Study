function solution(nums) {
    let set = new Set(nums);
    const maxMatch = set.size;
    const maxGet = Math.floor(nums.length / 2);
    let answer = maxGet > maxMatch ? maxMatch : maxGet;
    return answer;
}