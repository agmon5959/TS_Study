from collections import deque


def dfs(graph, v, visited):
    #현재노드 방문처리
    visited[v] = 1
    print(v, end=' ')
    for i in graph[v]:
        if visited[i] != 1:
            dfs(graph, i, visited)


def bfs(graph, start, visited):
    #시작 방문노드 큐 추가 및 방문처리
    queue = deque([start])
    visited[start] = 1
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for i in graph[v]:
            if visited[i] != 1:
                queue.append(i)
                visited[i] = 1


n, m, v = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

#번호가 작은것 번저 방문하기 위한 정렬
for i in range(n+1):
    graph[i].sort()

visited = [0] * (n + 1)
dfs(graph, v, visited)
print('')
visited = [0] * (n + 1)
bfs(graph, v, visited)


#https://www.acmicpc.net/problem/1260










