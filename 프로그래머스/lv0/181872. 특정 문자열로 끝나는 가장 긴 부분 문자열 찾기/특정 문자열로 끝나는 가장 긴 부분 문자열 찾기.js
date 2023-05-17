function solution(myString, pat) {
    return myString.substr(0, myString.lastIndexOf(pat) + pat.length);
}