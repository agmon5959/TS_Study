// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.


// 기울기를 이용한 풀이
function solution(dots) {
    // 기울기 = x증가량 / y증가량
    let x증가량 = 0;
    let y증가량 = 0;
    let 기울기 = 0;
    const arr = [];
    // 완전탐색
    for (let i = 0; i < dots.length; i++) {
        for (let j = i; j < dots.length; j++) {
            if (i === j) continue;
            x증가량 = dots[i][0] - dots[j][0];
            y증가량 = dots[i][1] - dots[j][1];
            기울기 = y증가량 / x증가량
            arr.push(기울기);
        }
    }
    let target = new Set([...arr]);
    return (target.size !== arr.length) ? 1 : 0
}