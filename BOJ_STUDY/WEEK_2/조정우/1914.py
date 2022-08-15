import sys
import math


def hanoi(disk, start, end, middle):
    if disk == 1:
        print(start, end)
        return

    hanoi(disk - 1, start, middle, end)
    print(start, end)
    hanoi(disk - 1, middle, end, start)
    return


n = sys.stdin.readline().split()
print(int(math.pow(2, int(n[0]))) - 1)
if int(n[0]) <= 20:
    hanoi(int(n[0]), 1, 3, 2)


# 원판이 한개인 경우:
# 1. A -> C
#
# 원판이 두개인 경우:
# 1. A -> B
# 2. A -> C
# 3. B -> C
#
# 원판이 새개인 경우
# 1. A -> C
# 2. A -> B
# 3. C -> B
# 4. A -> C
# 5. B -> A
# 6. B -> C
# 7. A -> C
#
# B가 중심이 되어 B로 옮긴 후 n번째는 C에다가 바로 꽂으면 됨.
#
# 1개의 원반일 때는 1번 이동
#
# 2개의 원반일 때는 3번 이동
#
# 3개의 원반일 때는 7번 이동
#
# 규칙 -> 2의 n제곱 -1



# https://www.acmicpc.net/problem/1914
