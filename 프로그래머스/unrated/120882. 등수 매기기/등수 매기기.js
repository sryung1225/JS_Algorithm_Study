function solution(score) {
    let average = [...score].map(subject => subject[0] + subject[1]);
    average.sort((a, b) => b - a);

    let answer = score.map(subject => average.indexOf(subject[0] + subject[1]) + 1);
    return answer;
}