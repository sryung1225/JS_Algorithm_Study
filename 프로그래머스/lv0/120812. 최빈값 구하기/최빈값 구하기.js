function solution(array) {
    if([...new Set(array)].length === 1)
        return array[0];
    
    let obj = {};
    array.forEach(v => {
        if(!obj[v])
            obj[v] = 1;
        else
            obj[v]++;
    }) // { '1': 1, '2': 1, '3': 3, '4': 1 }

    let arr = Object.keys(obj).map(v => 
       [+v, obj[v]]
    ).sort((a, b) => b[1] - a[1]);
    // [ [ 3, 3 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]

    return arr[0][1] === arr[1][1] ? -1 : arr[0][0];
}