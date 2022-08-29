# test case 갯수
T = int(input())
# DP 테이블 초기화
d = [0] * 10
d[0], d[1], d[2] = 1, 1, 2

# BOTTOM UP DP
for i in range(3, 11):
    d[i] = d[i-1] + d[i-2] + d[i-3]

for _ in range(T):
    a = int(input())
    print(d[a])
