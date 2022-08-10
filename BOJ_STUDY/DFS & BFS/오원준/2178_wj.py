N, M = map(int, input().split())
miro = []
for i in range(N):
    temp = list(map(int, input()))
    miro.append(temp)

move_X = [-1, 1, 0, 0]
move_Y = [0, 0, -1, 1]

def find_exit(miro, x,y):
    queue = []
    queue.append([x, y])

    while queue:
        temp = queue.pop(0)
        x = temp[0]
        y = temp[1]

        for i in range(4):
            mx = x + move_X[i]
            my = y + move_Y[i]

            if mx < 0 or my < 0 or mx >= N or my >= M:
                continue
            elif miro[mx][my] == 0 or miro[mx][my] != 1:
                continue
            elif miro[mx][my] == 1:
                miro[mx][my] = miro[x][y] + 1
                queue.append([mx,my])
    # x, y 좌표가 아닌 N,M 좌표로 마지막 queue가 M,N 이라는 보장이 없다.
    print(miro[N-1][M-1])


find_exit(miro, 0, 0)

