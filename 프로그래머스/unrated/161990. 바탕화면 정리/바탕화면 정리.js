function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    wallpaper.forEach((row, x) => {
        for(let y=0; y<row.length; y++){
            if(row[y] === "#"){
                if(x < lux) lux = x; 
                if(x > rdx) rdx = x;
                if(y < luy) luy = y;
                if(y > rdy) rdy = y;
            }   
        }
    })
    return [lux, luy, rdx+1, rdy+1];
}