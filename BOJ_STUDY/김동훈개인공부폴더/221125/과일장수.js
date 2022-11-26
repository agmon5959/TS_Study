// 과일 장수가 얻을 수 있는 최대 이익
function solution(k, m, score) {
    // 사과 상태 = 1~k
    // 한 상자에 최대 m까지 들어갈 수 있음
    // 사과 한 상자의 가격은 사과 최하점 * m
    // 남은 사과 버림
    let answer = [];
    score.sort((a, b) => b - a);
    let appleBox = [];
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        appleBox.push(score[i]);

        if (i % m === m - 1) {
            answer.push(appleBox);
            appleBox = [];
        }

    }

    for (let i = 0; i < answer.length; i++) {
        sum += Math.min(...answer[i]) * m;
    }
    return sum;
}