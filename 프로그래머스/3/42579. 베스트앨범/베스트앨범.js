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
        const matchGenre = playsArr.filter((play) => play[0] === genre).sort((a, b) => a[1] === b[1] ? a[2] - b[2] : b[1] - a[1]);
        for(let i=0; i<Math.min(2, matchGenre.length); i++){
            answer.push(matchGenre[i][2]);
        }
    }
    return answer;
}