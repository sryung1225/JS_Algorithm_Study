function solution(binomial) {
    let arr = binomial.split(" ");
    switch(arr[1]){
        case "+":
            return +arr[0] + +arr[2];
        case "-":
            return arr[0] - arr[2];
        case "*":
            return arr[0] * arr[2];
    }
}