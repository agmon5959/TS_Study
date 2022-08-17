const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫째 줄에 도시의 개수 N(1 ≤ N ≤ 1, 000)이 주어지고 둘째 줄에는 버스의 개수 M(1 ≤ M ≤ 100, 000)이 주어진다.
const city = Number(input.shift());
const bus = Number(input.shift());
const destination = input.pop();

const maxNum = Number.MAX_SAFE_INTEGER;

// 전체 그래프
const graph = Array.from(Array(city), () => Array(city).fill(maxNum));
// 방문한 노드를 기억하는 배열
const visited = Array.from({ length: city }).fill(false);
// 최소비용이 담기는 배열
const distance = Array.from({ length: city }).fill(0);



// 전체 그래프 초기화
for (let i = 0; i < city; i++) {
    let start = input[i].split(' ')[0];
    let end = input[i].split(' ')[1];
    let cost = input[i].split(' ')[2];

    graph[i][i] = 1;
    graph[start][end] = Number(cost);

}

// 현재 방문하지 않았던 노드 중에서 가장 짧은 거리를 가지는 노드를 구하는 함수
const getSmallDist = () => {
    let min = maxNum;
    let idx = 0;
    for (let i = 0; i < city; i++) {
        // 방문하지 않은 노드 중에서 현재 최소값보다 더 작은 값을 가지는 거리가 존재한다면 그 값으로 갱신한다.
        if (!visited[i] && distance[i] < min) {
            min = distance[i];
            idx = i;
        }
    }
    return idx;
}

const solution = (start) => {
    for (let i = 0; i < city; i++) {
        distance[i] = graph[start][i];
    }
    visited[start] = true;
    for (let i = 0; i < city; i++) {
        let cur = getSmallDist();
        visited[cur] = true;
        for (let j = 0; j < city; j++) {
            if (!visited[j]) {
                if (distance[cur] + graph[cur][j] < distance[j]) {
                    distance[j] = distance[cur] + graph[cur][j];
                }
            }
        }
    }
}

// console.log(destination.split(' '));
solution(destination.split(' ')[0]);
console.log(distance);
