function solution(arr1, arr2) {
    let answer = arr1.map(
                    (v1, i1) => v1.map(
                        (v2, i2) => v2 + arr2[i1][i2]
                    )
                ); // 이중 배열
    return answer;
}

 