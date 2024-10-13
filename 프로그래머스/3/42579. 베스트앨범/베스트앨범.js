function solution(genres, plays) {
    const playsArr = genres.map((genre, index) => [genre, plays[index], index]);
    
    const genresObj = {};
    genres.forEach((genre, index) => {
        genresObj[genre] = (genresObj[genre] || 0) + plays[index];
    })
    const bestGenres = Object.entries(genresObj).sort((a, b) => a[1] - b[1]).map((genre) => genre[0]);
    
    const answer = [];
    while(bestGenres.length > 0){
        const genre = bestGenres.pop();
        const matchGenre = playsArr.filter((play) => play[0] === genre).sort((a, b) => {
            return a[1] === b[1] ? a[2] - b[2] : b[1] - a[1];
        })
        answer.push(...matchGenre.slice(0, 2).map((song) => song[2]));
    }
    return answer;
}