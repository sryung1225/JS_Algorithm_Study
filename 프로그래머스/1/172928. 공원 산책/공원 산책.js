function solution(park, routes) {
    const [h, w] = [park.length, park[0].length];
    let [y, x] = [-1, -1];
    
    for(let i=0; i<h; i++) {
        for (let j=0; j<w; j++) {
            if (park[i][j] === "S") {
                y = i;
                x = j;
                break;
            }
        }
        if (x !== -1 && y !== -1) break;
    }

    routes.forEach((route) => {
        let [dir, step] = route.split(" ");
        if(dir === "E"){
            let newX = x + Number(step);
            if(newX < w){
                let isOkay = true;
                for(let i=x+1; i<=newX; i++){
                    if(park[y][i] === "X"){
                        isOkay = false;
                        break;
                    }
                }
                if(isOkay) x = newX;
            }
        } else if(dir === "W"){
            let newX = x - Number(step);
            if(newX >= 0){
                let isOkay = true;
                for(let i=x-1; i>=newX; i--){
                    if(park[y][i] === "X"){
                        isOkay = false;
                        break;
                    }
                }
                if(isOkay) x = newX;
            }
        } else if(dir === "S"){
            let newY = y + Number(step);
            if(newY < w){
                let isOkay = true;
                for(let i=y+1; i<=newY; i++){
                    if(park[i][x] === "X"){
                        isOkay = false;
                        break;
                    }
                }
                if(isOkay) y = newY;
            }
        } else if(dir === "N"){
            let newY = y - Number(step);
            if(newY >= 0){
                let isOkay = true;
                for(let i=y-1; i>=newY; i--){
                    if(park[i][x] === "X"){
                        isOkay = false;
                        break;
                    }
                }
                if(isOkay) y = newY;
            }
        }
    });
    return [y, x];
}