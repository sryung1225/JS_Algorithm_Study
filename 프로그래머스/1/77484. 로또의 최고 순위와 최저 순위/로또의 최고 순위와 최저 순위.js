function ranking(score) {
    let rank = Math.min(6, 7 - score);
    return rank;
}

function solution(lottos, win_nums) {
    const filterLottos = [...lottos].filter((lotto) => lotto !== 0);
    let [correct, none] = [0, 6 - filterLottos.length];
    filterLottos.forEach((lotto) => {
        if(win_nums.includes(lotto)) correct++;
    })
    let answer = [ranking(correct + none), ranking(correct)];
    return answer;
}