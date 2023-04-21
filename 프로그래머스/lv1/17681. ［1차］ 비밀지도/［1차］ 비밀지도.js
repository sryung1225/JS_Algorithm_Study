// 10진수 -> 2진수
function convertor(num, n){
    let arr = num.toString(2).split("");
    while(arr.length < n){
        arr.unshift("0");
    }
    return arr;
}

function solution(n, arr1, arr2) {
    let answer = [];
    let con1 = [];
    let con2 = [];
    for(let i=0; i<n; i++){
        con1 = convertor(arr1[i], n);
        con2 = convertor(arr2[i], n);
        // console.log(con1, con2);
        let ans = [];
        for(let j=0; j<n; j++){
            if(con1[j] === "1" || con2[j] === "1") ans.push("#");
            else ans.push(" ");
        }
        answer.push(ans.join(""));
    }
    return answer;
}