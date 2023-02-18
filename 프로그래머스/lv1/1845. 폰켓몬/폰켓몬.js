function solution(nums) {
    let array = [...new Set(nums)];
    if(array.length < nums.length/2) return array.length;
    else return nums.length/2;
}