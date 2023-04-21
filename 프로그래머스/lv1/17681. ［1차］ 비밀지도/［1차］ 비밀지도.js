function solution(n, arr1, arr2) {
    let answer = arr1.map((v, i) =>
                          (v|arr2[i]) // arr1[i] 와 arr2[i] 의 OR 결과를 반환
                          .toString(2) // 2진수로 변환
                          .padStart(n, 0) // 문자열의 길이가 n보다 작으면 왼쪽에 0을 채워 n글자로 만듦
                          .replace(/0/g," ") // 0 => " "
                          .replace(/1/g,"#") // 1 => "#"
                         );
    return answer;
}