# test case 갯수
T = int(input())
d = [0] * 11
d[0], d[1], d[2] = 1, 1, 2

#필요한 답 미리 저장
for i in range(3, 11):
    d[i] = d[i-1] + d[i-2] + d[i-3]

for _ in range(T):
    a = int(input())
    print(d[a])
