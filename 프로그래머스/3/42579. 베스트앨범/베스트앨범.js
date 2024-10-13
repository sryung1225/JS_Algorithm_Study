function solution(genres, plays) {
    const genresObj = {};
    const playObj = {};
    for(let i=0; i<genres.length; i++){
        const genre = genres[i];
        const play = plays[i];
        if(!genresObj[genre]){
            genresObj[genre] = [];
            playObj[genre] = 0;
        }
        genresObj[genre].push([i, play]);
        playObj[genre] += play;
    }
    const bestGenres = Object.keys(playObj).sort((a, b) => playObj[b] - playObj[a]);
    
    const answer = [];
    bestGenres.forEach((genre) => {
        const matchGenre = genresObj[genre].sort((a, b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
        });
        answer.push(...matchGenre.slice(0, 2).map((song) => song[0]));
    });
    return answer;
}