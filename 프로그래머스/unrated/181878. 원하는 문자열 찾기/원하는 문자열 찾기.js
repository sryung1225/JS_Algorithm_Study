function solution(myString, pat) {
    return myString.toLowerCase().split(pat.toLowerCase()).join("").length < myString.length ? 1 : 0;
}