function solution(sides) {
	return Math.min(...sides)*2-1;
}

// 조건 따져보기 (a<b 일 때)
// 1. b < a+c (b-a < c)
// 2. c < a+b

// 두 조건을 c 기준으로 합해보면
// b-a < c < a+b

// 즉, c의 갯수는
// (a+b) - (b-a) - 1
// 2a-1