N = int(input())

def hanoi(n, start, end, mid):
    if n == 1:
        print(start, end)
        return
    else:
        hanoi(n - 1, start, mid, end)
        print(start, end)
        hanoi(n - 1, mid, end, start)

print(2**N - 1)
if N <= 20:
    hanoi(N, 1, 3, 2)

# 하노이탑 알고리즘 3가지 규칙
# 1. 원빈은 위에서 부터 꺼낼수 있다.
# 2. 한번에 하나씩 이동해야한다.
# 3. 항상 작은 원반이 위에 있어야 한다.