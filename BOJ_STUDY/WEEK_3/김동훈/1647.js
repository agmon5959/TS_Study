const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));

function main() {
    let answer = 0;
    const [N, M] = input[0].split(' ').map(Number);
    let road = input.slice(1).map(_ => _.trim().split(' ').map(Number));

    let village = [];
    for (let i = 0; i < road.length; i++) {
        let [A, B, C] = road[i];  // A -> B : C.
        village.push({
            from: A,
            to: B,
            cost: C
        })
    }
    village.sort((a, b) => {
        a = a.cost;
        b = b.cost;
        if (a > b) return 1;
        else if (a < b) return -1;
    })
    //console.log(village)

    // unionFind
    let parent = new Array(N + 1).fill(0);
    for (let i = 0; i <= N; i++) {
        parent[i] = i;
    }

    answer = sol(village, parent);

    return console.log(answer)
}

function sol(village, parent) {
    let sum = 0;
    let MST = [];
    
    for (let i = 0; i < village.length; i++) {
        let [a, b, c] = [village[i].to, village[i].from, village[i].cost];
        // cycle check.
        if (!findParent(a, b, parent)) {
            unionParent(a, b, parent);
            MST.push({
                from: a,
                to: b,
                cost: c
            })
        }
    }
    // 비용이 젤 높은 간선 자르기.
    MST.pop()
    for (let i = 0; i < MST.length; i++) {
        sum += MST[i].cost;
    }

    return sum;
}
function getParent(x, parent) {
    if (parent[x] === x) return x;
    else return parent[x] = getParent(parent[x], parent); // return 이 있어야 축약됨.
}
function findParent(a, b, parent) {
    a = getParent(a, parent);
    b = getParent(b, parent);
    if (a === b) return true;
    else return false;
}
function unionParent(a, b, parent) {
    a = parent[a];
    b = parent[b];
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

main();