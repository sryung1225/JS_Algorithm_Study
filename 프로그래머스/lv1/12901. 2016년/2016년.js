function solution(a, b) {
    // solution(5, 24)
    let date = new Date(2016, a-1, b);
    // console.log(date.toString()); // ? Tue May 24 2016 00:00:00 GMT+0900 (Korean Standard Time)
    // console.log(date.toString().slice(0,3)); // ? Tue
    return date.toString().slice(0,3).toUpperCase();
}