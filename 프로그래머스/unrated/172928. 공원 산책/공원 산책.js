function solution(park, routes) {
    const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
    let [i, j] = [0, 0];
    for(let x=0; x<park.length; x++){
        if(park[x].includes("S")){
            [i, j] = [x, park[x].indexOf("S")];
            break;
        }
    }
    routes.forEach(v => {
        const [dir, dis] = v.split(" ").map(v => isNaN(+v) ? v : +v);
        let [ni, nj] = [i, j];
        let step = 0;
        while(step < dis){
            [ni, nj] = [ni+dirs[dir][0], nj+dirs[dir][1]];
            if(!park[ni] || !park[ni][nj] || park[ni][nj] === "X")
                break;
            step++;
            if(step === dis)
                [i, j] = [ni, nj];
        }
    })
    return [i, j];
}
