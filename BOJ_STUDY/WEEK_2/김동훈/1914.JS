const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = Number(require("fs").readFileSync(filePath).toString().trim().split("\n"));
/**
 * DFS를 통하여 하노이의 탑의 최소 이동 횟수를 구하는 함수
 * @param n         {number} 원반의 수
 * @param start     {number} 시작 기둥
 * @param sub       {number} 보조 기둥
 * @param target    {number} 목적 기둥
 * @param answer    {array}  정답 배열
 */
const DFS_hanoi = (n, start, sub, target) => {
    if (n === 1) {
        //? 탈출조건 < N이 1이라면 시작 기둥에서 목적 기둥으로 옮기고 return >
        //? 남은 기둥이 하나일 때 시작 기둥에서 목적 기둥으로 이동해주면 된다.
        answer.push([start, target]);
    } else {

        //? N개의 원반을 옮기기 위하여 N-1개의 원반을 보조기둥으로 옮긴다.
        DFS_hanoi(n - 1, start, target, sub);

        //? 가장 큰 원반을 목적기둥으로 옮긴다.
        answer.push([start, target]);

        //? 보조기둥에서 N-1개의 원반을 목적기둥으로 옮긴다.
        DFS_hanoi(n - 1, sub, start, target);

    }
}

const answer = [];
let overAns;

if (input <= 20) {
    console.log(2 ** input - 1)
    DFS_hanoi(input, 1, 2, 3, answer);
    console.log(answer.map((iter) => iter.join(" ")).join("\n"));
} else {
    //! BigInt 문제는 해결하였으나 메모리 초과 문제 발생
    overAns = ((BigInt(2) ** BigInt(input)) - BigInt(1));
    console.log(overAns.toString(10));
}