import sys
input = sys.stdin.readline

arr = []
while True:
    f_arr = list(map(int, input().rstrip().split()))
    n = f_arr.pop(0)

    if n == 0:
        break
