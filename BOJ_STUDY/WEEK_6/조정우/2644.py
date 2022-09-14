from collections import deque

def bfs(v):
    q = deque()
    q.append(v)
    visited[v] = True
    ans = 0
    while q:
        ans += 1
        for _ in range(len(q)):
            k = q.popleft()
            if k == b:
                return ans-1
            for e in arr[k]:
                if visited[e] == False:
                    visited[e] = True
                    q.append(e)

    return -1

n = int(input())
a, b = map(int, input().split(' '))
m = int(input())
arr = [[] for _ in range(n+1)]
for _ in range(m):
    x, y = map(int, input().split(' '))
    arr[x].append(y)
    arr[y].append(x)

visited = [False] * (n+1)
print(bfs(a))


# input
# 9
# 7 3
# 7
# 1 2
# 1 3
# 2 7
# 2 8
# 2 9
# 4 5
# 4 6

#output
# 3
