n = int(input())

dp = [0] * (n + 1)  # 반복문의 편의를 위해 0번째 배열에는 0으로 세팅, 이후 n+1만큼 배열생성

if n == 1:
    print(n)
elif n == 2:
    print(n+1)
else:
    dp[1] = 1
    dp[2] = 3
    for i in range(3, n+1):
        dp[i] = dp[i-1] + dp[i-2] * 2
    print(dp[n] % 10007)


# N    Result
# 1 => 1
# 2 => 3
# 3 => 5
# 4 => 11

#
# => (N-1) + (N-2) * 2