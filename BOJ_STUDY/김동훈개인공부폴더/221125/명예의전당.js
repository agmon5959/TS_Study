function solution(k, score) {
    const 전당 = [];
    const answer = [];

    for (let i = 0; i < score.length; i++) {

        전당.push(score[i]);
        전당.sort((a, b) => b - a);
        if (전당.length > k) {
            전당.pop();
        }
        answer.push(전당[전당.length - 1]);

    }

    return answer;
}