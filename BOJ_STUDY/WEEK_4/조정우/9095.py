n = int(input())
result = []

dp = [0] * 11  # 반복문의 편의를 위해 0번째 배열에는 0으로 세팅, 이후 11만큼 배열생성
dp[0], dp[1], dp[2] = 1, 1, 2   # dp[3] 은 4가 나와야하기 때문에 dp[0] = 1 세팅
for i in range(3, 11):
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

for _ in range(n):
    result.append(dp[int(input())])     # 출력위해 만들어줌

for i in result:
    print(i)


# N    Result
# 1 => 1
# 2 => 2
# 3 => 4
# 4 => 7
# 5
# 1+1+1+1+1 => 1
# 2+1+1+1   => 4
# 2+2+1     => 3
# 2+3       => 2
# 3+1+1     => 3
# 도합 13
#
# => (N-1) + (N-2) + (N-3)
