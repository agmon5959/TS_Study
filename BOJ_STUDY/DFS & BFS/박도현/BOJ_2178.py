from collections import deque

# n, m 공백으로 구분하여 입력 받기
n, m = map(int, input().split())

# 2차원 리스트 맵 정보 입력
graph = []
for i in range(n):
    graph.append(list(map(int, input())))


# 이동할 네 방향 정의 (상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    queue = deque()
    queue.append((x, y))

    # 큐가 빌 때 까지 반복
    while queue:
        x, y = queue.popleft()
        # 현재 위치에서 네 방향으로 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            # 미로 찾기 공간을 벗어난 경우 무시
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue    # python continue 만나면 for문 내 실행 코드 건너뜀
            # 이동할 수 없는 칸인 경우 무시
            if graph[nx][ny] == 0:
                continue

            # 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))

    # 가장 오른쪽 아래까지의 최단 거리 반환
    return graph[n-1][m-1]
print(bfs(0,0))

#https://doragoon.tistory.com/5


