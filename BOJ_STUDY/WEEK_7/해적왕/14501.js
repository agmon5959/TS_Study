
// 4번 예제가 80으로 떨어짐.
// 탐욕법처럼 풀어서 그런 듯... ;

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const days = +input.shift();
const list = Array.from({ length: days});
let maxBenefit = 0;


for (let i = 0; i < days; i++) {
    const [T, P] = input[i].split(" ");
    list[i] = [+T, +P]
}

/**
 * 
 * @param {Number} today : 상담 해줄까 말까 고민하는 날짜 (오늘 날짜 )
 * @param {Number} benefit : 수익의 합
 */
const recursiveFunc = (today, benefit) => {
    maxBenefit = Math.max(maxBenefit, benefit);

    // 종료조건
    if (today === days) return;
    // 상담을 진행하는 경우
    // 오늘 날짜 + 걸리는 시간이 내 근무일보다 크거나 같아야한다.

    if ((today + list[today][0] <= days)) {
        // 1번째 인자에는 상담을 완료하고 난 이후의 날짜를 넘겨줘야한다.
        // 2번째 인자에는 상담을 완료하였으니 현재 수익의 합에 상담 완료 비용을 추가해서 넘겨준다.
    
        recursiveFunc(today + list[today][0], benefit + list[today][1]);
    }

    // 상담을 진행하지 않는 경우
    else {
        // 내일로 이동
        recursiveFunc(today + 1, benefit);
    }
}

recursiveFunc(0, maxBenefit);
console.log(maxBenefit);