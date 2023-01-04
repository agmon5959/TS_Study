const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = Number(input.shift());
const map = input.map(iter => iter.split('').map(Number));
const visited = {};
const answer = [];

// 상하좌우 판별
let dx = [0, 0, 1, -1];
let dy = [-1, 1, 0, 0];


const bfs = (x, y) => {
    const queue = [[x, y]];
    
    let cnt = 1;
    visited[[x, y]] = true;

    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            let X = queue.shift();
            for (let j = 0; j < 4; j++) {
                let nx = X[0] + dx[j];
                let ny = X[1] + dy[j];
                if (
                    // 배열의 크기를 벗어난 인덱스를 참조하면 안됨.
                    (nx >= 0 && ny >= 0 && nx < map.length && ny < map.length) &&
                    // 1인 경우에만 탐색 해야함.
                    (map[nx][ny] === 1) &&
                    // 방문했던 곳은 방문하지 말자.
                    (!visited[[nx, ny]])
                ) {
                    // 방문배열에 체크
                    visited[[nx, ny]] = true;
                    cnt++;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    return cnt;
}


for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 1 && visited[[i, j]] !== true) {
            answer.push(bfs(i, j));
        }
    }
}

answer.sort((a, b) => a - b)
console.log(answer.length);
console.log(answer.join('\n'));