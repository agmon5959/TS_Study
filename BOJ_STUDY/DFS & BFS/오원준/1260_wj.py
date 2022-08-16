N, M, V = map( int,input().split())

graph = [[] for _ in range(N)]

for i in range(M):
    input_list = list(map(int, input().split()))
    graph[input_list[0]-1].append(input_list[1])
    graph[input_list[1]-1].append(input_list[0])

for i in graph:
    i.sort()

def DFS(graph,visited,idx):
    visited[idx -1] = 1
    print(idx, end=" ")
    for i in graph[idx -1]:
        if visited[i -1] == 0:
            DFS(graph, visited, i)

def BFS(graph,visited,idx):
    # print('a')
    queue = []
    queue.append(idx)
    visited[idx - 1] = 1

    


    while queue:
        i = queue.pop(0)
        print(i , end=" ")
        for j in graph[i-1]:
            if visited[j - 1] == 0:
                queue.append(j)
                visited[j-1] = 1

visited = [0 for _ in range(N)]
# print(visited)
DFS(graph,visited,V)
print()
visited = [0 for _ in range(N)]
BFS(graph,visited,V)

