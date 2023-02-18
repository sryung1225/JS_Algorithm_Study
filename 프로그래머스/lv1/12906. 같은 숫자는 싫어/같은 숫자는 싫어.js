function solution(arr) {
    let answer = arr.filter((v, i) => v != arr[i+1])
    // 현재 값v, 인덱스i
    // 현재 값과 다음 값이 같지 않은 경우에만 (현재값을) 필터링함
    return answer;
}