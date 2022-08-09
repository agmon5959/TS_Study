const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const checkArr = Array.from({ length: n }, () => Array(m).fill(0)); // n * m 2차원 배열
const matrix = [];

// 배열로 만들기
for (let i = 0; i < n; i++) {
    matrix.push(input[i].split("").map(Number)); // 미로 행렬
}

const BFS = (pX, pY) => {
    //? pX, pY : 초기 시작 좌표
    //? nX, nY : 이동할 좌표
    //? dX, dY : 상하좌우 방향
    //? x, y   : 현재 좌표

    const queue = [];
    const dX = [-1, 1, 0, 0];
    const dY = [0, 0, -1, 1];

    // 초기 queue 삽입 및 체크 배열에 체크
    queue.push([pX, pY]);
    checkArr[pX][pY] = 1;

    while (queue.length) {
        const [x, y] = queue.shift(); // 현재 좌표 가져오기

        if (x === n - 1 && y === m - 1) break; // 최단거리 찾았으면 break

        for (let i = 0; i < 4; i++) { // 4방향으로 반복문

            const [nX, nY] = [x + dX[i], y + dY[i]]; // direction X,Y 를 더해주어 4방향 판단

            if ((nX < 0 || nY < 0) || (nX >= n || nY >= m)) { // 갈 수 없는 곳이라면 continue
                continue;
            }


            if (matrix[nX][nY] && checkArr[nX][nY] === 0) { // 이미 간 곳은 가면 안됨
                checkArr[nX][nY] = checkArr[x][y] + 1; // 체크배열에 체크
                queue.push([nX, nY]);
            }
        }
    }
}

BFS(0, 0);
console.log(checkArr[n - 1][m - 1]);

