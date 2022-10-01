import sys
from collections import deque
input = sys.stdin.readline
#graph 구성
N = int(input())
graph = list(list(map(int, input().split())) for _ in range(N))
#이동 방향
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
#최단 거리를 위한 값
INF = 1e9
#아기 상어 크기
shark_size = 2
#아기 상어의 현재 좌표
now_x, now_y = 0, 0

#아기 상어 초기 위치 확인
for i in range(N):
    for j in range(N):
        if graph[i][j] == 9:
            now_x, now_y = i, j
            graph[i][j] = 0

#현재 위치에서 각 물고기까지의 거리를 반환, 지나는 경로마다 값을 저장
def BFS():
    queue = deque([(now_x, now_y)])
    # 방문 여부
    visited = [[-1]*N for _ in range(N)]
    visited[now_x][now_y] = 0
    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            #graph 범위 확인
            if 0 <= nx < N and 0 <= ny < N:
                #상어가 이동 가능한지 확인
                if shark_size >= graph[nx][ny] and visited[nx][ny] == -1:
                    visited[nx][ny] = visited[x][y] + 1
                    queue.append((nx, ny))
    return visited

#먹을 물고기 찾기
def solve(visited):
    x, y = 0, 0
    min_distance = INF
    for i in range(N):
        for j in range(N):
            #BFS에서 지나지 않는 경로는 최단 경로가 아님 + 아기 상어가 먹을 수 있는지 확인
            if visited[i][j] != -1 and 1 <= graph[i][j] < shark_size:
                if visited[i][j] < min_distance:
                    min_distance = visited[i][j]
                    x, y = i, j
    #모두 탐색해도 그대로 INF이면 먹을 물고기가 없다는 것
    if min_distance == INF:
        return False
    else:
        return x, y, min_distance


answer = 0
food = 0

while True:
    result = solve(BFS())

    if not result:
        print(answer)
        break
    else:
        now_x, now_y = result[0], result[1]
        answer += result[2]
        graph[now_x][now_y] = 0
        food += 1

    if food >= shark_size:
        shark_size += 1
        food = 0



# 2차 풀이

input = sys.stdin.readline

# 먹을 수 있는 물고기가 1마리라면, 그 물고기를 먹으러 간다.
# 먹을 수 있는 물고기가 1마리보다 많다면, 거리가 가장 가까운 물고기를 먹으러 간다.

n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
cnt = 0
x, y, size = 0, 0, 2
# 상어위치
for i in range(n):
    for j in range(n):
        if graph[i][j] == 9:
            x = i
            y = j


def biteFish(x, y, shark_size):
    distance = [[0] * n for _ in range(n)]
    visited = [[0] * n for _ in range(n)]
    # 거리는 아기 상어가 있는 칸에서 물고기가 있는 칸으로 이동할 때, 지나야하는 칸의 개수의 최솟값이다. (bfs사용)
    q = deque()
    q.append((x, y))
    visited[x][y] = 1
    temp = []
    while q:
        cur_x, cur_y = q.popleft()
        for i in range(4):
            nx = cur_x + dx[i]
            ny = cur_y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == 0:
                if graph[nx][ny] <= shark_size:
                    q.append((nx, ny))
                    visited[nx][ny] = 1
                    distance[nx][ny] = distance[cur_x][cur_y] + 1
                    if graph[nx][ny] < shark_size and graph[nx][ny] != 0:
                        temp.append((nx, ny, distance[nx][ny]))

    # 거리가 가까운 물고기가 많다면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리라면, 가장 왼쪽에 있는 물고기를 먹는다.
    return sorted(temp, key=lambda x: (-x[2], -x[0], -x[1]))


cnt = 0
result = 0
while 1:
    shark = biteFish(x, y, size)
    # 더 이상 먹을 수 있는 물고기가 공간에 없다면 아기 상어는 엄마 상어에게 도움을 요청한다.
    if len(shark) == 0:
        break
    # 거리가 가까운 물고기가 많다면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리라면, 가장 왼쪽에 있는 물고기를 먹는다.
    # 정렬한 결과를 반영해준다.
    nx, ny, dist = shark.pop()

    # 움직이는 칸수가 곧 시간이 된다.
    result += dist
    graph[x][y], graph[nx][ny] = 0, 0
    # 상어좌표를 먹은 물고기 좌표로 옮겨준다.
    x, y = nx, ny
    cnt += 1
    if cnt == size:
        size += 1
        cnt = 0
print(result)


# input

# 4
# 4 3 2 1
# 0 0 0 0
# 0 0 9 0
# 1 2 3 4

# output

# 14
