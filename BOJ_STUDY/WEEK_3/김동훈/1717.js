const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));

// x의 루트노드 찾는 함수
const find = (x) => {
    // 배열의 값과 인덱스가 같다면 부모 노드의 인덱스를 반환한다.
    if (parent[x] === x) {
        return x;
    }
    // 경로 압축을 위해 부모노드의 값으로 바꿔준다.
    const currentParent = find(parent[x]);
    return parent[x] = currentParent;

};

// 두 노드를 합치기 위한 함수
const union = (x, y) => {

    x = find(x);
    y = find(y);

    // x와 y가 같다면 이미 연결되어 있는 경우
    if (x === y) return;

    // x와 y 둘 중 큰 값을 가지는 부모 인덱스를 작은 값을 가지는 변수로 넣는다.
    if (x < y) parent[y] = x;
    else parent[x] = y;
};

// 같은 부모를 가지는지 확인하는 함수
const isUnion = (x, y) => {
    x = find(x);
    y = find(y);

    if (x === y) { return true; }
    // 사이클이 생기지 않음
    else return false;
}

// N => 노드 갯수
// M => 간선 갯수
const [N, M] = input[0].split(" ").map((iter) => +iter);
const graph = [];
const parent = new Array(Number(N) + 1 ).fill().map((_,idx)=> +idx);
const ans = [];

// 그래프 전처리
for (let i = 1; i <= M; i++){
    graph.push(input[i].split(" ").map((iter)=>+iter));
}

// parent 전처리


graph.forEach((iter, idx) => {
    let [startNode, endNode] = [iter[1], iter[2]];
    // 0이면 합치기
    if (iter[0] === 0) {
        union(startNode, endNode);
    // 1이면 루트노드가 같은지 판단
    } else {
        if (isUnion(startNode, endNode)) {
            ans.push("YES");
        } else {
            ans.push("NO");
        }
        
    }
})

console.log(ans.join("\n"));