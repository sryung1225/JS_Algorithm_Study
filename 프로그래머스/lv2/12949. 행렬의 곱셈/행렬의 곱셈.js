function solution(arr1, arr2) {
    let answer = 
        arr1.map((row) =>
            arr2[0].map((_, j) =>
                row.reduce((sum, cell, i) =>
                    sum + cell * arr2[i][j]
                , 0)
            )
        )
    return answer;
}

// answer[0][0]
// - sum = 0
// - cell = arr1[0][0], arr2[i][j] = arr2[0][0]
//   - sum = arr1[0][0]*arr2[0][0]
// - cell = arr1[0][1], arr2[i][j] = arr2[1][0]
//   - sum = arr1[0][0]*arr2[0][0] + arr1[0][1]*arr[1][0]