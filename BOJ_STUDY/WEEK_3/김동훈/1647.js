const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const [house, load] = input[0].split(" ");
const path = [];
const parent = Array.from({ length: Number(house) + 1 }).map((iter, idx) => +idx);

for (let i = 1; i < input.length; i++){
    path.push(input[i].split(" ").map(e => +e));
}
path.sort((a,b) => {
    a = a[2];
    b = b[2];
    if (a > b) return 1;
    else return -1;
})

//! union find -- 
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

//? MST 구현부
const MST = [];
for (let i = 0; i < path.length; i++){
    let [startNode, endNode, cost] = [path[i][0], path[i][1], path[i][2]];
    // 사이클이 생기는지 안생기는지 체크한다.
    if (!isUnion(startNode,endNode)) {
        union(startNode, endNode);
        MST.push({
            from: startNode,
            to: endNode,
            cost: cost
        })
    }
}
MST.pop();
let sum = 0;
MST.forEach((iter) => { sum += iter.cost });
console.log(sum);


//@ 궁금한 점
//@ 같은 부모를 가지고 있으면 사이클이 생성된다는 것을 어떻게 아는가?
//@ 가장 큰 값을 빼주는 이유는 무엇인가?


// input > 
// 7 12
// 1 2 3
// 1 3 2
// 3 2 1
// 2 5 2
// 3 4 4
// 7 3 6
// 5 1 5
// 1 6 2
// 6 4 1
// 6 5 3
// 4 5 3
// 6 7 4