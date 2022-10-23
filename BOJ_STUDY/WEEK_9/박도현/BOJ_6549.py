import sys

st = []
ans = []
while True:
    info = list(map(int, sys.stdin.readline().split()))
    if info[0] == 0:
        break
    total = info[0]
    info = info[1:]
    temp = []
    for i in range(len(info)):
        # cut : 꺼낸 직사각형의 인덱스 저장
        cut = i
        # 스택이 비어있지 않고 top의 높이보다 지금 직사각형의 높이가 더 작다면
        while st and st[-1][0] > info[i]:
            # 스택에서 pop
            height, idx = st.pop()
            # 높이 저장
            temp.append(height * (i - idx))
            # 확장되는 인덱스 갱신
            cut = idx
        # 처리 후 스택에 저장
        st.append((info[i], cut))
    # 끝까지 순회하고도 스택이 비지 않았다면
    while st:
        height, idx = st.pop()
        #높이 저장
        temp.append(height * (total - idx))
    # 높이 저장 중 가장 큰 값을 정답배열에 저장
    ans.append(max(temp))

# 정답 출력
for i in ans:
    print(i)