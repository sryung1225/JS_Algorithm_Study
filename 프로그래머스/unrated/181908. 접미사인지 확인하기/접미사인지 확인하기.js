function solution(my_string, is_suffix) {
    if(my_string.slice(my_string.length - is_suffix.length) === is_suffix)
        return 1;
    else 
        return 0;
}