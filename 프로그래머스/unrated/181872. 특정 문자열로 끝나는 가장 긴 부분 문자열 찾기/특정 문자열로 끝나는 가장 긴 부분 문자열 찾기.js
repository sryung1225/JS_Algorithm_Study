function solution(myString, pat) {
    let i = 1;
    while(myString.slice(-pat.length) !== pat){
        myString = myString.slice(0, myString.length-1);
        i++;
    }
    return myString;
}