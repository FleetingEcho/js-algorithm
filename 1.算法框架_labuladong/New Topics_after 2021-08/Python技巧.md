# 一、字符串str

+ 获取ASCII  `ord('a')` =>  97
+ 根据ACII 转 字符  `chr(97)` => 'a'
+ 获取字符串单个字符 `my_string[0]`
+ 大小写 `my_string.lower()`  `my_string.upper()`
+ 搜索子串  `count(sub[, start[, end]])`=> `'xyabxyxy'.count('xy',1,6)` => 2 . 不包含最后一位
+ 截取子串 `my_string[0:3]`  截取[0,3)
+ 字符串反向 `my_str[::-1]`



+ 判断
  + 判断所有字符是否为数字  `str.isdigit()`
  + 判断所有字符都是字母   `str.isalpha()`





# 二、字典

+ 浅拷贝 `my_dict.copy()` `\# 浅拷贝：深拷贝父对象（一级目录），子对象（二级目录）不拷贝，还是引用`
+ 深拷贝 `copy.deepcopy(my_dic)`

+ 内建函数

  + `len(map)` 

  + `max(map)    min(map)` 返回键的最大/小值

  + `sum(map)` 所有键的和

  + ```python
    1、chear() 清空字典
    2、pop(key) 移除键，同时返回此键所对应的值
    3、copy() 返回字典D的副本，只复制一层（浅拷贝）
    
    4、update(d2) 将字典d2合并到d中，如果键相同，帽此键的值取d2的值作为新值
    5、get(key,default) 返回键key所对诮的值，如果没有此键，则返回default
    6、keys() 返回可迭代的dict_keys集合对象
    
    7、values() 返回可迭代的dict_values值对象
    8、items() 返回可迭代的dict_items对象
    ```

+ 字典推导式`map = {x : x ** 2 for x in range(10)}`

+ 检查key是否存在(返回True/ False)  `if "name" in map.keys()`,  `if item_value in map.values()`
+ 获取值
  + `map["name"]`  不存在会报错
  + `map.get("name","default_name")`

+ 设置值 (会返回该值)
  + `map.setdefault("name","default_name")`
  + `map["name"]="Jake"`	

+ 删除字典键值
  + `del map["name"]`
  + `map.pop('name')`  返回key="name"的value, given key可以是任意位置
  + `map.popitem()` 删除并返回最后一个键值对， （‘age’,20）

+ 清空： `map.clear()`

+ 合并字典 `dict_c = {**dict_a, **dict_b}`

  + ```python
    >>> dict_a = {'a': 1, 'b': 2}
    >>> dict_b = {'b': 3, 'c': 4}
    >>> dict_c = {**dict_a, **dict_b}
    >>> dict_c
    # {'a': 1, 'b': 3, 'c': 4}
    ```

  + 

+ 遍历

  + ```python
    for k, v in map.items()  # 惰性加载，省内存
    	print(k,v)
        
    for key in map.keys():
    	print(key+':'+map[key])
        
    for value in map.values():
    	print(value)
    ```

+ pretty printing:  `pprint.pprint(wife)`

  + ```python
    >>> wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
    >>> pprint.pprint(wife)
    # {'age': 33,
    #  'eye_color': 'brown',
    #  'hair_color': 'brown',
    #  'has_hair': True,
    #  'height': 1.6,
    #  'name': 'Rose'}
    ```

+ 动态字符串  `f"hello,{name}"`   => `hello, jake`

+ 去除两边空格 `s.strip()`
+ 去除首尾字符'0'  `str = "00000003210Runoob01230000000"; `  `str.strip( '0' )`





字符串转换

+ ```py
  s = 'Welcome To Toronto'
  print(f'List of Words ={s.split(" ")}')
  
  s = 'Welcome,To,Toronto'
  print(f'List of Words ={s.split(",")}')
  
  #如果想变为单个char 数组， 直接用list
  s = ' abc '
  print(f'List of Characters ={list(s)}') #[' ', 'a', 'b', 'c', ' ']
  print(f'List of Characters ={list(s.strip())}') #['a', 'b', 'c']
  ```



# 三、数组

+ 初始化长度  `arr=[True]*10`
+ 浅拷贝数组
  +  `arr.copy()`
  + `arr[:]`
  + `list(arr)`
+ 深拷贝  `copy.deepcopy(arr)`

+ 倒序遍历  `for i in range(n - 1, -1, -1)`   从n-1遍历到0,不包括-1
+ 访问元素 `arr[0]`开始元素  `arr[-1]`末尾元素
+ 截取元素：`arr[0:4:1]`
+ 浅拷贝:  `arr[:]` 
+ 末尾添加元素： `arr.append('name')`
+ 任意位置添加元素： `arr.insert(1, 'name1')`

+ 删除元素 `del arr[1]`  `del arr[1:3]`  `del arr`  删除列表中的一个，多个元素，或删除列表本身

+ 清空列表 `del arr[:]`  => `arr 是 []`

+ 删除元素： `arr.remove('chair')`  只会删除第一个， 如果多个需要循环删除

+ 删除并得到指定位置元素： `arr.pop(0)`, 默认删除并弹出最后一个

+ 自定义排序

  + ```python
    import functools
    arr = [-1, -2, 20, 33, 4, 5, 6, 7, 8, 9, 10]
    def sort(a, b):
        if a > b:
            return 1
        elif a < b:
            return -1
        else:
            return 0
    arr.sort(key=functools.cmp_to_key(sort))    #只对list有效，无返回值，改变原数组
    a2 = sorted(arr, key=functools.cmp_to_key(sort))    #对所有iterator有效，并且返回新的arr
    print(arr, a2)
    
    
    
    # 默认增数排序
    arr.sort(reverse=True)
    arr.sort()  #默认递增， 改变原数组
    
    ```

+ 合并列表 `arr1 + arr2`   `arr1.extend(arr2)`

+ 扩增列表`newArr= arr*3`

+ 降序排列 ` b.sort(key= lambda x:x[0], reverse=True)`

+ 反序  `newArray=arr[::-1]`  `list(reversed(arr))`  

+ **set默认会对元素进行排序** `set('my name is chaogo')` => `{' ', 'a', 'c', 'e', 'g', 'h', 'i', 'm', 'n', 'o', 's', 'y'}`

+ 遍历

  + ```python
    for key, v in enumerate(list):
        print(k,v)
        
    for item in list:
    	print(item)
    ```

+ 过滤 `arr=[ val for val in origin_list if val >3]`   => `arr=[4,5]`

+ 修改列表 `arr=[val **2 for val in origin_list]` => `arr=[1,4,9,16,25]`

+ 判断列表是否存在元素 `if val in arr`  `if val not in arr`

+ 拍平数组

  + ```python
    arr=[ [1,2,3],[4,5,6],[7,8,9]]
    newArr=[i for j in arr for i in j]
    # [1,2,3,4,5,6,7,8,9]
    ```

+ 查找数字出现的次数  `arr=[1,2,3,4,5,6,7,8,9,9,9]` `times=arr.count(9)`

+ 交换数字 `a, b = 'table', 'chair'`  `a, b = b, a` => 实现了反转

+ str展开成数组 `list('hello-jake')`  => `['h','e','l','l','o','-','j','a','k','e']`

+ 统计次数 ` arr.count("hi")`

+ 查找index  `arr.index('hi')`  ` arr.index("Hi",0,10)`

+ 数组转换

  + 转换成str

    + ```py
      ''.join(arr)  #根据情况看加不加空格
      
      
      ss=''
      for x in arr:
          ss+=x
      print(ss)
      ```

  + 转换成tuple   `tuple(value)`

+ Tuple转换  `tuple = ((20, 'Ahana'), (21, 'Tom'))`

  + Tuple to list  `list(tuple)` 只对单层有效，即`(1,2,3,4,5)`
  + 多层有效：  ``
  + Tuple to dictionary `dict(tuple)`
  + 单层转String  ` ''.join(tuple)`





+ 生成数组

  + ```py
    row = [set() for _ in range(9)]
    col = [set() for _ in range(9)]
    palace = [[set() for _ in range(3)] for _ in range(3)]
    
    
    rows = [[0] * 9 for _ in range(9)]
    columns = [[0] * 9 for _ in range(9)]
    subboxes = [[[0] * 9 for _ in range(3)] for _ in range(3)]
    ```

 



# 四、 Set

+ 初始化Set `s={1,2,3,4,5,3,3}` => `s为{1,2,3,4,5}`

+ 添加 `s.add(9)`   `s.update([2,3,4,5,6,7,8,9])`  更新一个或多个。

+ 删除 `s.remove(3)`  没有会报错

+ 删除 `s.discard(3)` 不会报错

+ 操作

  + ```py
    #Union  并集
    >>> s1 = {1, 2, 3}
    >>> s2 = {3, 4, 5}
    >>> s1.union(s2)  # or 's1 | s2'
    # {1, 2, 3, 4, 5}
    
    #Intersection 交集
    >>> s1 = {1, 2, 3}
    >>> s2 = {2, 3, 4}
    >>> s3 = {3, 4, 5}
    >>> s1.intersection(s2, s3)  # or 's1 & s2 & s3'
    # {3}
    
    
    #Difference 差集
    >>> s1 = {1, 2, 3}
    >>> s2 = {2, 3, 4}
    
    >>> s1.difference(s2)  # or 's1 - s2'
    # {1}
    >>> s2.difference(s1) # or 's2 - s1'
    # {4}
    
    # symetric_difference 反向差集
    >>> s1 = {1, 2, 3}
    >>> s2 = {2, 3, 4}
    >>> s1.symmetric_difference(s2)  # or 's1 ^ s2'
    # {1, 4}
    ```







# 五、数据结构

+ Stack 栈

  + ```py
    stack=[]
    stack.append(a)
    cur=stack.pop()
    ```

+ Queue 队列

  + ```py
    from collections import deque
    
    q=deque()
    q.append(x)
    cur=q.popleft()
    ```

+ Heap堆 --小顶堆

  + ```py
    import heapq
    
    nums=[]
    heap=heapq.heapify(nums)
    heapq.heappush(nums,newVal)
    heapq.heappop(nums)
    
    
    heapreplace(nums, 5.5) #弹出最小的元素，将新元素插入
    ```

  + 使用--用来寻找任何可迭代对象iter中的前n个最大的或前n个最小的元素。

    + ```py
      from heapq import *
      lst = [5, 8, 0, 4, 6, 7]
      print(nsmallest(3, lst))
      print(nlargest(3, lst))
      ```

    + 

+ PriorityQueue 优先级队列

  + 实现机制

    + Heap(Binary, Binomial, Fibonacci)  ==O(n*logk)==

      Binary Search Tree

  + ```py
    from queue import PriorityQueue
        
    q=PriorityQueue()
    
    q.put((2,"jake"))
    q.put((1, "Lucy"))
    q.put((0, "Tom"))
    
    while i<q.qsize():
        print(q.get())
    while not pq.empty():
        print pq.get()
        
    ```

  + 自定义排序

    + ```py
      import queue
      
      class person(object):
          def __init__(self, name, score):
              self.name = name
              self.score = score
      
          def __lt__(self, other):
              return self.score > other.score  # 从大到小排序
      
      p1 = person("Jake", 15)
      p2 = person("Iron", 23)
      p3 = person("JOE", 12)
      p4 = person("Semi", 32)
      que = queue.PriorityQueue()
      que.put(p1)
      que.put(p2)
      que.put(p4)
      que.put(p3)
      while not que.empty():
          print(que.get().name)
      
      ```

    + 













# 六、类型

+ 类型

  + ```py
    int 
    float
    str
    bool
    
    list[int]
    dict[str,int]
    tuple[int,int]
    
    ->str/int/float/bool
    ->NoReturn  # NoReturn和隐式返回None是不一样的
    
    #Sequence 注解
    from collections.abc import Sequence as Seq2
    
    list: Sequence[int]  # list 或者tuple都使用
    tuple1:Sequence[str]
    
    #有可能返回None,也有可能返回str,不一定
    def foo(a: int = 0) -> Optional[str]:
        if a == 1:
            return 'Yeah'
    # Optional[X] 和 Union[X, None] 是等价的。
    def foo() -> Union[str, int, float,None]:  #返回其中的一种
    
    
    #类型名称
    Vector2D = Tuple[int, int]
    def foo(vector: Vector2D):
        print(vector)
    
    foo(vector=(1, 2))
    # 创建新类型
    from typing import NewType
    from typing import Tuple
    Vector3D = NewType('Vector3D', Tuple[int, int, int])
    
    
    #函数注解
    def say_hi(name:str)->str:
        return f"hello,{name}"
    
    def add(first: int = 10, second: float = 5.5) -> float:
        return first + second
    
    #无返回值
    def foo():
        pass
    def bar() -> None:
        pass
    
    # 如果要避免循环导入或者注解早于对象定义的情况，可以用字符串代替类型：
    def hello(p: 'Person') -> str:
        return f'Hello, {p.name}'
    
    
    class Person:
        def __init__(self, name: str):
            self.name = name
    #效果和不加单引号是一样的
    
    
    #容器类型
    from typing import List, Dist,Tuple  #version 3.9以前需要引入
    
    def mix(scores: List[int], ages: Dict[str, int]) -> Tuple[int, int]: # <3.9版本
        return (0, 0)
    def mix(scores: list[int], ages: dict[str, int]) -> tuple[int, int]: # 3.10版本
        return (0, 0)
    
    
    #Callable 可以声明函数/类
    
    def hello(a: Callable):
        a()
    
    # 类型检查通过
    hello(Foo())  # Foo是class
    # 同样通过
    hello(bar)  #function
    ```

+ 限定字面量

  + ```py
    from typing import Literal
    
    MODE = Literal['r', 'rb', 'w', 'wb']
    def open_helper(file: str, mode: MODE) -> str:
        ...
    
    open_helper('/some/path', 'r')  # 成功
    open_helper('/other/path', 'typo')  # 失败
    ```

+ 限定class中实现的方法等

  + ```py
    from typing import Protocol
    
    class Proto(Protocol):
        def foo(self):
            print('I am proto')
    
    class A:
        def foo(self):
            print('I am A')
    
    class B:
        def bar(self):
            print('I am B')
    
    def yeah(a: Proto):
        pass
    
    # 通过，A 实现了协议中的 foo() 方法
    yeah(A())
    # 不通过，B 未实现 foo()
    yeah(B())
    ```

+ Any类型 

  + ```py
    def foo() -> Any:
        pass
    ```

+ 泛型

  + ```py
    from typing import TypeVar, List
    
    # 定义泛型 T
    # T 必须是 str 或 int 其中一种
    T = TypeVar('T', str, int)
    
    def bar(a: T, b: T) -> List[T]:
        return [a, b]
    
    
    # 函数的参数必须为同一个类型"T"
    bar('Joe', 19)  # 类型检查不通过
    bar(19, 21)  # 通过
    bar('Joe', 'David') # 通过
    ```

  + 对类型进行参数化

    + ```python
      from typing import Dict, TypeVar
      
      # 定义泛型 K 和 V
      # K 和 V 的具体类型没有限制
      K = TypeVar("K")
      V = TypeVar("V")
      
      def get_item(key: K, container: Dict[K, V]) -> V:
          return container[key]
      
      
      dict_1 = {"age": 10}
      dict_2 = {99: "dusai"}
      
      print(get_item("age", dict_1))
      # 例1
      # 类型检查通过，输出: 10
      
      print(get_item(99, dict_2))
      # 例2
      # 类型检查通过，输出: dusai
      
      print(get_item("name", dict_2))
      # 例3
      # 类型检查失败
      # 因为"name"是字符串，而dict_2的键为整型
      ```



# 七、数学方法

+ 随机数

  + ```py
    import random
    
    random.random()  # [0,1) 随机浮点数
    random.randint(1,10)  # [1,10)一个整数型随机数  
    random.uniform(1.1,5.4) # [1.1, 5.4)之间的随机浮点数，区间可以不是整数
    random.uniform(1,10)
    
    
    random.choice('abcdefghijklmnopqrstuvwxyz!@#$%^&*()')  #随机字符
    
    ```

+ 取整数

  + 截断小数部分 `int(3.33)`   => 3
  + 向下取整  `math.floor(num)`
  + 向上取整  `math.ceil(num)`
  + 四舍五入  `math.round(4.2)`
  + 分别取出整数和小数部分 `math.modf(4.25)` => `(0.25,4.0)`

+ 取根号 `math.sqrt(num)`    `num**0.5`

+ 多次方 `math.pow(2,10)`  2的十次方



# 八、作用域

Python中有 LEGB准则 =>查找变量
局部（Local）作用域）
封闭（Enclosing）作用域
全局（Global）作用域
内置（Built-in）作用域

+ Python中以函数为作用域

+ Python中没有块级作用域
  + ```python
    for i in range(10):
    pass
    print(i)  # 9

+ 如果要使用外部变量

  + 在多重嵌套中，`nonlocal`只会上溯一层； 而如果上一层没有，则会继续上溯。

  + ```py
    i = 0
    def a():
        i = 1
        def b():
            nonlocal i  #声明为外部的i 
            i = 2
        b()
        print(i)  # 2
    a()
    ```

  + ```py
    #不断向上追溯
    def a():
        i = 1
        def b():
            # i = 2
            def c():
                nonlocal i
                i = 3
            c()
            print('b:', i)  # 3
        b()
        print('a:', i)  # 3
    a()
    ```

  + 

+ 如果要使用全局变量

  + ```py
    i = 0
    def a():
        global i #声明为global的i
        i = 1
        print('local:', i)   # 1
    a()
    print('global:', i) #1
    ```

  + 





# 常见错误

+ **可选参数默认值的设置在Python中只会被执行一次**

  + ```py
    >>> def foo(bar=None):
    ...    if bar is None:    # 如果不写，则不断调用foo会出现 ["baz", "baz", "baz",...] 的情况
    ...        bar = []
    ...    bar.append("baz")
    ...    return bar
    ...
    >>> foo()
    ["baz"]
    >>> foo()
    ["baz"]
    >>> foo()
    ["baz"]
    ```

  + 
