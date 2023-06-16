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