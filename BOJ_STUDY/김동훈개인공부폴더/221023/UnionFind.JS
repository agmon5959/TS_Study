class UnionFind {
    // x의 루트노드 찾는 함수
    find = (x,parent) => {
        // 배열의 값과 인덱스가 같다면 부모 노드의 인덱스를 반환한다.
        if (parent[x] === x) {
            return x;
        }
        // 경로 압축을 위해 부모노드의 값으로 바꿔준다.
        const currentParent = this.find(parent[x]);
        return parent[x] = currentParent;

    };

    // 두 노드를 합치기 위한 함수
    union = (x, y, parent) => {

        x = this.find(x);
        y = this.find(y);

        // x와 y가 같다면 이미 연결되어 있는 경우
        if (x === y) return;

        // x와 y 둘 중 큰 값을 가지는 부모 인덱스를 작은 값을 가지는 변수로 넣는다.
        if (x < y) parent[y] = x;
        else parent[x] = y;
    };

    // 같은 부모를 가지는지 확인하는 함수
    isUnion = (x, y) => {
        x = this.find(x);
        y = this.find(y);

        if (x === y) { return true; }
        // 사이클이 생기지 않음
        else return false;
    }
}

module.exports = UnionFind;