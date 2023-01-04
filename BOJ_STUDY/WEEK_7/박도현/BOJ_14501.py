n = int(input())
consult = []
for _ in range(n):
    consult.append(list(map(int, input().split())))

d = [0 for _ in range(n + 1)]

# DP활용
for i in range(n - 1, -1, -1):
    if i + consult[i][0] > n:
        d[i] = d[i + 1]
    else:
        d[i] = max(d[i + 1], consult[i][1] + d[i + consult[i][0]])

print(d[0])

# 첫날 부터 누적합으로 구하려고 했으나 구현 부분 X
# DP 쓰는거 힌트로 확인후 마지막날 부터 하나씩 쌓아서 적재후 첫번째항에 결과 도출


# 뒤에서부터 dp를 풀면 된다. 크게 두 가지 경우가 있다.
# 1. 상담에 필요한 일 수가 퇴사일을 넘어가는 경우
# -> 해당 일자에 일을 할 수 없으니 다음날의 dp 값을 그대로 가져온다. (dp의 최댓값인 dp[i+1])
#
# 2. 퇴사일을 넘어가지 않을 경우
# (i) 오늘 상담을 하지 않을 경우 : d[i+1] (지난 상담까지의 보수)
# (ii) 오늘 상담을 할 경우 : d[t[i] + i] + p[i] (d[오늘 날짜 + 오늘 시작할 상담에 필요한 일 수] + (상담 보수))
