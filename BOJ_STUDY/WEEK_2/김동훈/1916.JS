const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫째 줄에 도시의 개수 N(1 ≤ N ≤ 1, 000)이 주어지고 둘째 줄에는 버스의 개수 M(1 ≤ M ≤ 100, 000)이 주어진다.
const city = Number(input.shift());
const bus = Number(input.shift());

// 출발지 , 도착지, 간선의 비용
for (let i = 0; i < input.length; i++){
    input[i].split(' ');
}
