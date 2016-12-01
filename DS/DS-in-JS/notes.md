
## 第2章 数组

### 2.1 JavaScript 中对数组的定义
1. 数组的标准定义：一个存储元素的线性集合(collection)，元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间存储位置的偏移量
2. JS 中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型，这是因为JS对象中的属性名必须是字符串。数组在JS中只是一种特殊的对象，所以效率上不如其他语言中的数组高

### 2.2 使用数组
1. 创建
    * var arr = [];
    * var arr = [1, 2, 3];
    * var arr = new Array();
    * var arr = new Array(1, 2, 3);
    * var arr = new Array(5);
2. 数组中的元素不必是同一种数据类型
3. 判断:Array.isArray()
4. 读写数组：[]操作符
5. 数组的 length 属性反映的是当前数组中元素的个数(数组本身是对象，因此有 length 属性)
6. 字符串生成数组：split()
7. 对数组的整体性操作
    * 赋值
    * 浅复制/深复制

### 存取函数
1. 查找 
    * indexOf()
    * lastIndexOf()
2. 数组的字符串表示:
    * join()
    * toString()
3. 由已有数组创建新数组
    * concat()
    * splice()
4. 可变函数
    * push
    * unshift
    * pop
    * shift
    * splice
    * reverse
    * sort
5. 迭代器方法
    * 不生成新数组
        - forEach
        - every
        - some
        - reduce
    * 生成新数组
        - map
        - filter
6. 二维和多位数组
    * 定义
    ```
    Array.matrix = function(numrows, numcols, initial) {
        var arr = [];
        for (var i = 0; i < numrows; ++i) {
            var columns = [];
            for (var j = 0; j < numcols; ++j) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }

        return arr;
    }
    ```
    * 处理二维数组的元素
        - 按行访问
        - 按列访问
    * 参差不齐的数组
    * 对象数组
    * 对象中的数组

## 第3章 列表

1. 列表的抽象数据类型定义
    * ADT：抽象数据类型
2. 

## 第4章 栈
## 第5章 队列
## 第6章 链表
## 第7章 字典
## 第8章 散列
## 第9章 集合
## 第10章 二叉树和二叉查找树
## 第11章 图和图算法
## 第12章 排序算法
## 第13章 检索算法
## 第14章 高级算法