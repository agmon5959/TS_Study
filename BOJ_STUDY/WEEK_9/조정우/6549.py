while True:
    n, *heights = list(map(int, input().split()))
    if (n == 0):
        break

    # 첫 시점의 계산을 위해 0을 맨 앞에 추가하고,
    heights.insert(0, 0)
    # 마지막 사각형 계산을 위해 0을 끝에 추가합니다.
    heights += [0]
    checked = [0]
    area = 0

    # 현재 높이보다 이전 높이가 높으면, while에 진입합니다.
    # 현재 높이가 더 낮은 경우, 넓이를 이어서 계산할 수 없으므로
    # 이전 시점까지 저장됬던 사각형의 높이를 계산합니다.
    # 끝 사각형도 고려해야 하므로, n+1까지 반복합니다.
    for i in range(1, n + 2):
        # heights[checked[-1]]은 이전 시점의 사각형 높이
        # heights[i]는 현재 시점의 사각형 높이
        # heights[checked[-1]] > heights[i]는 현재 높이보다 이전 높이가 높은지 확인
        while (checked and (heights[checked[-1]] > heights[i])):
            # 비교할 사각형 index
            cur_height = checked.pop()
            # (i - 1 - checked[-1])은 cur_height와 현재 시점 사이에 몇 개의 사각형이 존재하는지를 판단
            area = max(area, (i - 1 - checked[-1]) * heights[cur_height])
        checked.append(i)
    print(area)