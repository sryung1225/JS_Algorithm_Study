function solution(ingredient) {
    let answer = 0;
    let size = ingredient.length - 3;

    for (let i = 0; i < size; i++) {
        if (ingredient.slice(i, i + 4).toString() === "1,2,3,1") {
            ingredient.splice(i, 4);
            answer++;
            i -= 3;
        }
    }
    return answer;
}

// 햄버거 순서 : 빵(1) -> 야채(2) -> 고기(3) -> 빵(1) -> (포장) : [1,2,3,1]
// ex) [2,1,1,2,3,1,2,3,1]
//     splice(2,4) => [2,1,2,3,1] => splice(1,4) => [2]