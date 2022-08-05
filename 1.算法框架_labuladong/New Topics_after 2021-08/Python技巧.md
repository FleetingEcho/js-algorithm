# 一、字典

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

  + 






# 二、数组

+ 访问元素 `arr[0]`开始元素  `arr[-1]`末尾元素
+ 截取元素：`arr[0:4:1]`
+ 浅拷贝:  `arr[:]` 
+ 末尾添加元素： `arr.append('name')`
+ 任意位置添加元素： `arr.insert(1, 'name1')`

+ 删除元素： `arr.remove('chair')`  只会删除第一个， 如果多个需要循环删除

+ 删除并得到指定位置元素： `arr.pop(0)`, 默认删除并弹出最后一个

+ 自定义排序

  + ```python
    def sort(a, b):
    	if a > b: return 1
    	elif a < b: return -1
    	else: return 0
    arr.sort(key = functools.cmp_to_key(sort))  #只对list有效，无返回值，改变原数组
    sorted(arr,key=functools.cmp_to_key(sort))  #对所有iterator有效，并且返回新的arr
    
    
    # 默认排序
    arr.sort(reverse=True)
    arr.sort()  #默认递增， 改变原数组
    
    ```

+ 合并列表 `arr1 + arr2`   `arr1.extend(arr2)`

+ 扩增列表`newArr= arr*3`

+ 降序排列 ` b.sort(key= lambda x:x[0], reverse=True)`

+ 反序  `newArray=arr[::-1]`  `reversed(arr)`

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





# 三、 Set

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

  + 