function solution(myString, pat) {
    let arr = [];
    for(let i of myString){
        if(i === "A") 
            arr.push("B");
        else if(i === "B") 
            arr.push("A");
        if(arr.join("").slice(-pat.length) === pat)
            return 1;
    }
    return 0;
}