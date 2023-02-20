// slice 사용 대신에 push 를 이용해 시간복잡도를 줄이는 방법
function solution(ingredient) {
    let answer = 0;
    let arr = [];

    for (let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i]);
        // console.log(arr);
        if (
            arr[arr.length - 1] === 1 &&
            arr[arr.length - 2] === 3 &&
            arr[arr.length - 3] === 2 &&
            arr[arr.length - 4] === 1
        ) {
            arr.splice(-4);
            answer++;
        }
    }
    return answer;
}