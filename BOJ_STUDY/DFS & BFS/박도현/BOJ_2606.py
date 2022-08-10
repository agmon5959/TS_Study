
ans = 0

n = int(input())
m = int(input())

graph = [[] for _ in range(n + 1)]
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


def dfs(graph, v, visited):
    # 현재노드 방문처리
    global ans
    visited[v] = 1
    for i in graph[v]:
        if visited[i] != 1:
            dfs(graph, i, visited)
            ans += 1
visited = [0] * (n + 1)
dfs(graph, 1, visited)
print(ans)






#https://www.acmicpc.net/problem/2606
#https://doragoon.tistory.com/6