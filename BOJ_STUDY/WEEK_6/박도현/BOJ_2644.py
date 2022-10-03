n = int(input())    # 전체 사람 수
a, b = map(int, input().split())    # 촌수를 계산해야 하는 서로 다른 두 사람의 번호
m = int(input())    # 부모 자식들 간의 관계의 개수

graph = [[] for _ in range(n + 1)]  # 관계 표현 그래프
visited = [0] * (n + 1) # 방문 여부 체크

# 부모 / 자식 관계 그래프
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

print(graph)

def dfs(node):
    for n in graph[node]:
        if visited[n] == 0:
            visited[n] = visited[node] + 1
            dfs(n)
dfs(a)

print(visited[b] if visited[b] > 0 else -1)

# 둘다 가능하다고 생각 했지만 첫번째 예제 기준으로 dfs가 더 빨리 도달하여 dfs로 풀이
