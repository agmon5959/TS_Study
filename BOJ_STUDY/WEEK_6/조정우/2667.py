import sys

dx = [-1, 0 , 1, 0]
dy = [0, 1, 0, -1]
n = int(sys.stdin.readline())
a = [list(sys.stdin.readline()) for _ in range(n)]
cnt = 0
apt = []

def dfs(x,y):
    global cnt
    a[x][y] = '0' #방문한 곳은 0으로
    cnt += 1
    for i in range(4):
        nx = x + dx[i] #i=0일때 (nx,ny)는 좌 , i=1일때 (nx,ny)는 상
        ny = y + dy[i]
        if nx < 0 or nx >= n or ny < 0 or ny >= n:
            continue
        if a[nx][ny] == '1':
            dfs(nx, ny)

for i in range(n):
    for j in range(n):
        if a[i][j] == '1':
            cnt = 0
            dfs(i, j)
            apt.append(cnt)

print(len(apt))
apt.sort()
for i in apt:
    print(i)


# input
# 7
# 0110100
# 0110101
# 1110101
# 0000111
# 0100000
# 0111110
# 0111000

#output
# 3
# 7
# 8
# 9


# 좌표문제를 풀때는 dx, dx라는 리스트를 선언해주어서 풀면 좀더 접근이 쉬울것같습니다.
#
# dx = [-1, 0, 1, 0]
# dy = [0, 1, 0, -1]
#
# dx, dx가 나타내는 것은 for문에서 i가 0일때는 좌표(x, y)의 좌, i가 0일때는 좌표(x, y)의 상, i가 0일때는 좌표(x, y)의 우, i가 0일때는 좌표(x, y)의 하
#
# 우선 이중for문을 통해 a[x][y]를 0, 0부터 n, n까지 비교해줍니다.
#
# 1.
# a[i][j] == '1' 일 경우만 cnt를 0으로 대입한 후(다른아파트 단지들을 세고 나면 cnt가 증가해 있으므로) dfs(i, j) 실행
#
# 2.
# dfs(x, y)함수
#
# 2 - 1.
# cnt변수 global로 선언. 현재방문한좌표 '0' 으로대입(반복해서 방문하는 일이 없게 해줌)
#
# 2 - 2.
# cnt변수 증가(해당단지의 개수 1씩 증가)
#
# 2 - 2.
# for문 상, 하, 좌, 우 4번반복
#
# 2 - 3.
# a[nx][ny] 현재 비교중인 a[x][y]의 상( or 하 or 좌 or 우) 좌표가 1인경우에 다시 dfs재귀호출
#
# 만약 1이 아니라면? for문 탈출해서 다른 상( or 하 or 좌 or 우) 비교.
#
# 2 - 4.
# dfs재귀호출 할 때마다(즉, 집이 있는 곳일 때마다 = '1'일 때마다) cnt증가
#
# 2 - 5.
# 더 이상 '1' 인 곳이 없으면( = 집이 없으면) 함수종료.
#
# 3.
# dfs함수를 실행한 후 나온 cnt는 apt리스트에 추가.
#
# 4.
# 모든 좌표에 이런 과정을 반복.
#
# 5.
# cnt변수를 저장해둔 apt리스트의 길이 출력.
#
# 6.
# apt리스트 정렬.
#
# 7.
# apt리스트에 들은 단지수 출력.
