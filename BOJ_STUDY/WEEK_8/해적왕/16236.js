const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = +input.shift();

// 상어의 현재 상태를 기록하기 위한 객체
let shark = {
    'x': 0,
    'y': 0,
    "size": 2,
    "exp": 0,
}

// input을 배열로 전처리 해주고 상어의 현재 위치를 파악한다.
const map = input.map((xIter, xIdx) => {
    return xIter.split(" ").map((yIter, yIdx) => {
        let value = +yIter;
        if (value === 9) {
            shark.x = xIdx;
            shark.y = yIdx;
        }
        return value;
    })
});

map[shark.x][shark.y] = 0; // 상어를 발견하였으니 상어가 있던 위치를 0으로 바꿔줌
let fish = []; // 상어가 먹을 수 있는 생선들
let dxy = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상 하 좌 우


let visited = new Array(N);
for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(N).fill(false);
}
console.log(visited);




console.log(map);
console.log(shark);