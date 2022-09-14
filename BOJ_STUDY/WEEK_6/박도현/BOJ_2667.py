n = int(input())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))

cnt = 1

def dfs(x, y, result):
    cnt = result
    # 주어진 범위를 벗어나는 경우에는 즉시 종료
    if x <= -1 or x >= n or y <= -1 or y >= n:
        return False

    if graph[x][y] == 1:
        graph[x][y] = cnt
        dfs(x - 1, y, cnt)
        dfs(x, y - 1, cnt)
        dfs(x + 1, y, cnt)
        dfs(x, y + 1, cnt)
        return True
    return False


result = 1
for i in range(n):
    for j in range(n):
        if dfs(i, j, result):
            result += 1

print(result)
print(graph)

