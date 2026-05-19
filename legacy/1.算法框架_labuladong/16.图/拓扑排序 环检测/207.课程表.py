from collections import deque, defaultdict
from typing import List


class Solution:

    def canFinish(self, numCourses: int,
                  prerequisites: List[List[int]]) -> bool:
        # 入度数组(列表，保存所有课程的依赖课程总数)
        inDegrees = [0 for _ in range(numCourses)]
        # 关系表(字典，保存所有课程与依赖课程的关系)
        graph = [[] for _ in range(numCourses)]
        # 或者 graph = defaultdict(list)  是一样的，初始化数组，仅仅为一个map
        queue = deque()
        for cur, pre in prerequisites:
            # 保存课程初始入度值
            inDegrees[cur] += 1
            # 添加依赖它的后续课程
            graph[pre].append(cur)
        # Get all the courses with the indegree of 0.
        for i in range(len(inDegrees)):
            # 入度为0的课程入列
            if inDegrees[i] == 0:
                # 队列只存储入度为0的课程，也就是可以直接选修的课程
                queue.append(i)
        while queue:
            pre = queue.popleft()
            # 选修课程-1
            numCourses -= 1
            # 如果有依赖此课程的后续课程则更新入度
            for cur in graph[pre]:
                inDegrees[cur] -= 1
                # 后续课程除去当前课程无其他依赖课程则丢入队列
                if not inDegrees[cur]:
                    queue.append(cur)
        return numCourses == 0


# 时间复杂度 O(N+M)
# 空间复杂度 O(N+M)


class Solution1:

    def canFinish(self, numCourses: int,
                  prerequisites: List[List[int]]) -> bool:
        inDegrees = [0 for _ in range(numCourses)]
        graph = [[] for _ in range(numCourses)]
        queue = deque()
        for cur, pre in prerequisites:
            inDegrees[cur] += 1
            graph[pre].append(cur)

        for i in range(len(inDegrees)):
            if inDegrees[i] == 0:
                queue.append(i)

        while queue:
            pre = queue.popleft()
            numCourses -= 1
            for cur in graph[pre]:
                inDegrees[cur] -= 1
                if not inDegrees[cur]:
                    queue.append(cur)
        return numCourses == 0