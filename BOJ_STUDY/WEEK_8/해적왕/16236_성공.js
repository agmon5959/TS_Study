const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
let answer = 0;

// 문제에서를 입력받은 2차원 배열이다.
let map = new Array(N);
for (let i = 0; i < map.length; i++) {
    map[i] = new Array(N);
}

// 상어의 상태.
let shark = {
    'x': 0,
    'y': 0,
    'exp': 2,
    'lv': 2
}
// 먹을 수 있는 물고기들의 목록.
let fish = [];

for (let i = 0; i < N; i++) {
    let temp = input.shift().trim().split(' ').map(x => Number(x));
    for (let j = 0; j < N; j++) {
        map[i][j] = temp[j];
        if (map[i][j] === 9) {
            map[i][j] = 0;
            shark.x = j;
            shark.y = i;
        }
    }
}

// BFS 를 통해 아기상어가 접근할 수 있는 물고기를 선별해보자.

// 상 우 하 좌
let dxy = [[-1, 0], [0, 1], [1, 0], [0, -1]];

BFS(shark.y, shark.x);
function BFS(y, x) {
    let visited = new Array(N);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(N).fill(false);
    }

    // fish 배열을 모두 비워줌으로 인해서 새로운 상어 위치에 따른 물고기들의 위치를 계산 할 수 있고, 같은 물고기가 중복으로 들어가는것을 방지 할 수 있다.
    fish = [];

    // Queue 좌표와 거리가 들어간다.
    let Q = [];
    Q.push([y, x, 0]);
    while (Q.length !== 0) {
        let temp = Q.shift();
        console.log(temp,"temp")
        let curY = temp[0];
        let curX = temp[1];
        let curD = temp[2];

        for (let next = 0; next < 4; next++) {
            let nextY = curY + dxy[next][0];
            let nextX = curX + dxy[next][1];
            let nextD = curD + 1;

            // 상어의 움직임이 주어진 map을 벗어나지 않는다 && 아기 상어가 통과할 수 있는 물고기다.
            if (((0 <= nextY) && (nextY < N)) && ((0 <= nextX) && (nextX < N))) {
                if ((!visited[nextY][nextX]) && (map[nextY][nextX] <= shark.lv)) {
                    visited[nextY][nextX] = true;
                    Q.push([nextY, nextX, nextD]);
                    // 아기 상어가 먹을 수 있는 물고기다.        
                    if ((map[nextY][nextX] !== 0) && (map[nextY][nextX] < shark.lv)) {
                        fish.push({ 'x': nextX, 'y': nextY, 'distance': nextD });
                    }
                }
            }
        }
    }
}

console.log(fish);
while (fish.length !== 0) {
    // 먹을 수 있는 생선이 1마리 일때.
    if (fish.length === 1) {
        shark.y = fish[0].y;
        shark.x = fish[0].x;
        map[shark.y][shark.x] = 0;
        shark.exp--;
        if (shark.exp === 0) {
            shark.lv++;
            shark.exp = shark.lv;
        }
        answer += fish[0].distance;
        fish.shift();
        BFS(shark.y, shark.x)
    }
    // 먹을 수 있는 생선이 2마리 이상일때.
    else if (fish.length >= 2) {
        fish.sort((a, b) => {
            let A = a.distance;
            let B = b.distance;
            if (A < B) return -1;
            else if (A > B) return 1;
            else {
                A = a.y;
                B = b.y;
                if (A < B) return -1;
                else if (A > B) return 1;
                else {
                    A = a.x;
                    B = b.x;
                    if (A < B) return -1;
                    else if (A > B) return 1;
                    else return 0;
                }
            }
        })
        shark.y = fish[0].y;
        shark.x = fish[0].x;
        map[shark.y][shark.x] = 0;
        shark.exp--;
        if (shark.exp === 0) {
            shark.lv++;
            shark.exp = shark.lv;
        }
        answer += fish[0].distance;
        fish.shift();
        BFS(shark.y, shark.x);
    }
}
if (fish.length === 0)
    return console.log(answer);