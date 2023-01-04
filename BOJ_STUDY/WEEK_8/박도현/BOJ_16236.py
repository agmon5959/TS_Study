from collections import deque
# 무한을 의미하는 값으로 10억 설정
INF = 1e9


n = int(input())
data = []
for _ in range(n):
    data.append(list(map(int, input().split())))

# 아기상어 위치 초기화
now_size = 2    # 처음 물고기 크기

now_x, now_y = 0, 0
for i, v in enumerate(data):
    if 9 in v:
        now_x, now_y = i, v.index(9)
        # 아기 상어 시작위치를 찾은뒤에 그 위치엔 아무것도 없다고 표기
        data[now_x][now_y] = 0


#  방향 돌리기
dx, dy = [-1, 0, 1, 0], [0, 1, 0, -1]

# 모든 위치까지 '최단 거리만' 계산하는 BFS 함수
def bfs():
    # 값이 -1 이라면 도달할 수 없다는 의미(초기화)
    dist = [[-1] * n for _ in range(n)]
    # 시작 위치는 도달이 가능하다고 보며 거리는 0
    q = deque([(now_x, now_y)])
    dist[now_x][now_y] = 0

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx and nx < n and 0 <= ny and ny < n:
                # 자신의 크기 보다 작거나 같은 경우에 지나갈 수 있음
                if dist[nx][ny] == -1 and data[nx][ny] <= now_size:
                    dist[nx][ny] = dist[x][y] + 1
                    q.append((nx, ny))
    # 모든 위치까지의 최단 거리 테이블 반환
    return dist

# 최단 거리 테이블이 주어졌을 때, 먹을 물고기를 찾는 함수
def find(dist):
    x, y = 0, 0
    min_dist = INF
    for i in range(n):
        for j in range(n):
            # 도달이 가능하면서 먹을 수 있는 물고기일 때
            if dist[i][j] != -1 and 1 <= data[i][j] and data[i][j] < now_size:
                # 가장 가까운 물고기 1마리만 선택
                if dist[i][j] < min_dist:
                    x, y = i, j
                    min_dist = dist[i][j]
    if min_dist == INF:
        return None
    else:
        return x, y, min_dist


result = 0
ate = 0

while True:
    # 먹을 수 있는 물고기의 위치 찾기
    value = find(bfs())
    # 먹을 수 있는 물고기가 없는 경우, 현재까지 움직인 거리 출력
    if value == None:
        print(result)
        break
    else:
        # 현재 위치 갱신 및 이동 거리 변경
        now_x, now_y = value[0], value[1]
        result += value[2]
        # 먹은 위치에는 이제 아무것도 없도록 처리
        data[now_x][now_y] = 0
        ate += 1
        # 자신의 현재 크기 이상으로 먹은 경우, 크기 증가
        if ate >= now_size:
            now_size += 1
            ate = 0

