from collections import deque

def bfs(start):
    q = deque()
    visited[start] = 1
    q.append(start)
    while q:
        node = q.popleft()
        for i in graph[node]:
            if visited[i] == 0:
                visited[i] = -visited[node]
                q.append(i)
            else:
                if visited[i] == visited[node]:
                    return False
    return True

#테스트 케이스 개수
k = int(input())

#그래프 정점, 간선의 개수 (v, e)
for i in range(k):
    v, e = map(int, input().split())
    graph = [[] for _ in range(v + 1)]
    # 방문 노드 체크
    visited = [0] * (v + 1)
    flag = True
    for j in range(e):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)
    for t in range(1, v+1):
        if visited[t] == 0:
            if not bfs(t):
                flag = False
                break
    print("YES" if flag else "No")









