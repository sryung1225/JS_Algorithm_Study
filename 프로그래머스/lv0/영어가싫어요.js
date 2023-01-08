function solution(numbers) {
  let answer = 0;
  const regax = [/zero/g, /one/g, /two/g, /three/g, /four/g,
                 /five/g, /six/g, /seven/g, /eight/g, /nine/g];
  for (let i=0; i<=9; i++){
    answer = numbers.replace(regax[i], i);
    numbers = answer;
  }
  return Number(answer);
}

// 다른 풀이 : object 활용하기
// function solution(numbers) {
//   const obj = {
//     zero: 0, one: 1, two: 2, three: 3, four: 4,
//     five: 5, six: 6, seven: 7, eight: 8, nine: 9
//   };
//   const answer = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => { return obj[v];});
//   return Number(answer);
// }

// 다른 풀이 : split + join 활용하기
// function solution(numbers) {
//   const number = ["zero", "one", "two", "three", "four",
// 									"five", "six", "seven", "eight", "nine"]
//   for(let i = 0 ; i<number.length; i++){
//     numbers = numbers.split(number[i]).join(i)
//   }
//   return +numbers;
// }