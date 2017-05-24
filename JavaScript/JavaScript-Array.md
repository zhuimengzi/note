## JavaScript-Array

### Array构造器

如果参数只有一个并且是Number类型，那么就是指定数组的长度，但不能是NaN，如果是多个会被当做参数列表。

```javascript
new Array(12)
// (12) [undefined × 12]
new Array('')
// [""]
new Array({})
// [Object]
new Array([])
// [Array(0)]
new Array(null)
// [null]
new Array(NaN)
// Uncaught RangeError: Invalid array length (无效的数组长度，因为NaN是Number类型，但又不是一个具体的数字因此报错)
```

注意当只传递一个参数时，它只是指定该数组的长度，并不会去填充内容

![](http://images2015.cnblogs.com/blog/857662/201705/857662-20170524181507919-656458127.png)

由于传递一个参数时不会填充数组内容，因此forEach不会循环这些空内容，或者说forEach不是根据数组长度来循环的，以下代码就不会被输出任何内容

```javascript
new Array(6).forEach(function(item,index){
  console.log(index)
});
```

像我们自己模拟的forEach基本上都是有问题的，因为我看大部分人都是通过for循环数组的长度来模拟的forEach

```javascript
function forEach(arr,fun){
	for(var i = 0; i < arr.length; i++){
        fun(arr[i]);
    }
}
```

这就说明在某些情况下数组的长度是不可靠的，并且我们没有办法去真实的模拟forEach，通过判断是不是undefined也是不行的。

由于传递一个参数时只会增加数组长度而不会填充内容，因此我们可以利用这个特点来实现自定义索引起始位置。

```javascript
new Array(10).concat([1,2,3,4,5]).forEach(function(item,index){
	console.log(`item: ${item} index: ${index}`);
});
// item: 1 index: 10
// item: 2 index: 11
// item: 3 index: 12
// item: 4 index: 13
// item: 5 index: 14
```

当然我们也可以这样玩

```javascript
new Array(10).concat([1,2,3,4,5]).concat(new Array(5)).concat([6,7,8,9,10])
```

![](http://images2015.cnblogs.com/blog/857662/201705/857662-20170524181541200-1502618076.png)

这种方式有个好处就是，空内容不会被循环到。

它还可以用来实现相同的连续字符

```javascript
new Array(5+1).join("哈") //由于数组索引是从0开始的所以需要加+1才是5
// "哈哈哈哈哈"
```

我们用它来输出一个好玩的

```javascript
new Array(3).concat(['l','o','v','e']).concat(new Array(3)).join('--')
// "------l--o--v--e------"
```

如果你希望设置默认填充内容可以使用数组的fill方法

```javascript
new Array(5).fill(999)
[999, 999, 999, 999, 999]
```

通过Array()方法来创建数组和用new方法来创建效果一样。

### 其他知识点

数组和任何值相加都会将数组转换成字符串再进行拼接

```javascript
[1,2,3] + 6
// "1,2,36"
[1,2,3] + {}
// "1,2,3[object Object]"
[1,2,3] + [1,2,3]
// "1,2,31,2,3"
```

如果数组只有一个值，那么当这个数组和其他值相减相乘等时会被转换为数字，如果为空会被转换为0

```javascript
[5] - 2
// 3
```

如果是多个值，肯定是NaN









