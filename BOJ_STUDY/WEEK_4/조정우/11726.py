n = int(input())

dp = [0] * (n + 1)  # 반복문의 편의를 위해 0번째 배열에는 0으로 세팅, 이후 n+1만큼 배열생성

if n <= 3:
    print(n)
else:
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    print(dp[n] % 10007)


# N    Result
# 1 => 1
# 2 => 2
# 3 => 3
# 4 => 5
# 5 => 8
# 6 => 13
#
# => (N-1) + (N-2)