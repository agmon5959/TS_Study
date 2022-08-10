N = int(input())
M = int(input())

graph = [[] for _ in range(N)]

for i in range(M):
    input_list = list(map(int, input().split()))
    graph[input_list[0]-1].append(input_list[1])
    graph[input_list[1]-1].append(input_list[0])

for i in graph:
    i.sort()

def BFS(graph,visited,idx,answer):
    # print('a')
    queue = []
    queue.append(idx)
    visited[idx - 1] = 1

    while queue:
        answer = answer + 1
        i = queue.pop(0)
        for j in graph[i-1]:
            if visited[j - 1] == 0:
                queue.append(j)
                visited[j-1] = 1
    return answer - 1

visited = [0 for _ in range(N)]
print(BFS(graph,visited,1,0))

