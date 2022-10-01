import sys

input = sys.stdin.readline

N = int(input())
array = []
result = 1e9  # 결과값 출력을 위한 result값을 문제의 범위를 벗어나는 큰 수로 초기화
visited = [False] * (N + 1)  # 방문여부를 확인하는 리스트
for _ in range(N):
    array.append(list(map(int, input().split())))


def solve(depth, idx):
    global result
    if depth == (N // 2):  # N // 2 번만큼 재귀를 돌면
        start, link = 0, 0  # start팀과 link팀 0으로 선언
        for i in range(N):
            for j in range(i + 1, N):  # 이중 리스트의 열은 굳이 0부터 돌필요가 없기 때문에 i + 1 로 범위를 좁혀준다.
                if visited[i] and visited[j]:  # 만약 i,j 둘다 방문 했다면
                    start += (array[i][j] + array[j][i])  # 방문한 사람을 스타트팀에 더해준다.
                elif not visited[i] and not visited[j]:  # 방문 안한 i j 는 링크팀이므로
                    link += (array[i][j] + array[j][i])  # 방문안한 사람을 링크팀에 더해준다

        result = min(result, abs(start - link))  # 최솟값을 결과값에 대입
    for i in range(idx, N):
        if not visited[i]:  # 만약 방문을 안했다면
            visited[i] = True  # 방문으로 처리
            solve(depth + 1, i + 1)  # 재귀를 돈다
            visited[i] = False  # 방문 완료 처리


solve(0, 0)
print(result)


# input

# 6
# 0 1 2 3 4 5
# 1 0 2 3 4 5
# 1 2 0 3 4 5
# 1 2 3 0 4 5
# 1 2 3 4 0 5
# 1 2 3 4 5 0

# output

# 2
