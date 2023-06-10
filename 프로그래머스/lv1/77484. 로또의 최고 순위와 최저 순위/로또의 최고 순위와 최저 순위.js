function solution(lottos, win_nums) {
    let dontknow = lottos.filter(v => !v).length;
    let same = lottos.filter(v => win_nums.includes(v)).length;
    const rank = n => n >= 2 ? 7 - n : 6;
    return [rank(same+dontknow), rank(same)];
}