function solution(order) {
  // console.log(typeof order); // ? number
  let array = String(order).split(""); // number->string->array 형변환
  let answer = 0;
  for(let i of array){
    if(i === "3" || i === "6" || i === "9"){
      answer++;
    }
}
  return answer;
}

// 다른 풀이 : 정규표현식 + matchAll() 사용해서 만들기
// function solution(order) {
//   let Regax = /[3|6|9]/g;
//   let answer = [...`${order}`.matchAll(Regax)].length;
//   return answer;
// }
// match()는 값이 있으면 array, 값이 없으면 null을 반환 => array.length 사용이 불가능함 => 오류 발생
// matchAll()를 이용하고 array로 형변환해주면 값이 없어도 빈 배열 []를 반환하기 때문에 해결 가능