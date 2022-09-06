const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));

const N = +input.shift();
const chk1 = 1;
const chk2 = 2;
const ans = Array(N).fill('YES');


const bfs = (start, graph, visited) => {

    visited[start] = chk1;
    const stack = [start];

    while (stack.length) {

        const node = stack.pop();
        const curSet = visited[node];
        let nextSet = null;

        if (curSet === chk1) {
            nextSet = chk2;
        } else {
            nextSet = chk1;
        }
        
        

        // 런타임에러 해결
        if (!graph[node]) {
            continue;
        }

        for (let i = 0; i < graph[node].length; i++) {
            const adjNode = graph[node][i];
            
            if (visited[adjNode] === curSet) {
                return false;
            }

            if (!visited[adjNode]) {
                visited[adjNode] = nextSet;
                stack.push(adjNode);
            }
        }
    }
    return true;
};

for (let i = 0; i < N; i++) {
    // 정점의 갯수 V , 간선의 갯수 E
    const [V, E] = input.shift().split(' ').map(e=>+e);
    const edges = input.splice(0, E).map(v => v.split(' ').map(e=>+e));
    

    const graph = edges.reduce((acc, v) => {
        const from = v[0];
        const to = v[1];

        if (acc[from]) {
            acc[from].push(to);
        } else {
            acc[from] = [to];
        }

        if (acc[to]) {
            acc[to].push(from);
        } else {
            acc[to] = [from];
        }
        return acc;
    }, {});


    
    const visited = Array(V + 1).fill(0);

    for (let j = 1; j <= V; j++) {
        
        if (visited[j]) {
            continue;
        }

        // 진입점은 중요하지않았음 .. !
        if (!bfs(j, graph, visited)) {
            ans[i] = 'NO';
            break;
        }
    }
}

console.log(ans.join('\n'));