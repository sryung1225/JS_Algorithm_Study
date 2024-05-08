function solution(arr1, arr2) {
    let answer = arr1.map((row, idx1) => {
        row = row.map((ele, idx2) => {
            ele += arr2[idx1][idx2];
            return ele;
        })
        return row;
    });
    return answer;
}