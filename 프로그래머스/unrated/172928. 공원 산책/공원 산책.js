function solution(park, routes) {
    const [w, h] = [park[0].length, park.length];
    let [i, j] = [0, 0];
    for(let x=0; x<h; x++){
        if(park[x].includes("S")){
            [i, j] = [x, park[x].indexOf("S")];
            break;
        }
    }
    routes.forEach(v => {
        const [dir, dis] = v.split(" ").map(v => isNaN(+v) ? v : +v);
        let step = 0;
        if(dir === "E"){
            while(step+1 <= dis && j+step+1 < w && park[i][j+step+1] !== "X"){
                step++;
                if(j+step === j+dis)
                    j += dis;
            }
        } else if(dir === "W"){
            while(step+1 <= dis && j-(step+1) >= 0 && park[i][j-(step+1)] !== "X"){
                step++;
                if(j-step === j-dis)
                    j -= dis;
            }
        } else if(dir === "N"){
            while(step+1 <= dis && i-(step+1) >= 0 && park[i-(step+1)][j] !== "X"){
                step++;
                if(i-step === i-dis)
                    i -= dis;
            }
        } else if(dir === "S"){
            while(step+1 <= dis && i+step+1 < h && park[i+step+1][j] !== "X"){
                step++;
                if(i+step === i+dis)
                    i += dis;
            }
        }
        // console.log(dis, dis, "/", [i, j])
    })
    return [i, j];
}
