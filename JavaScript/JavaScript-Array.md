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

### 数组的访问

数组通过下标访问

```javascript
[2,3,4,5][1]
// 3
```

当我们通过以下方式进行访问时，会被解析为连续运算返回最后一个值

```javascript
[2,3,4,5][1,2]
// 4
```

由于以上[1,2]是去访问数组的下标因而被解析成了1,2结果返回的是2，所以以上输出4

数组也是一种特殊的对象，因此我们也可以通过键值对的形式去访问

```javascript
var arr = [];
arr.say = 'Hello';
arr.say
// "Hello"
```

### 数组与其他值的运算

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

### 遍历数组

使用for

```javascript
var arr = [2,3,4,5];
for(let i = 0, len = arr.length; i < len; i++){
	console.log(arr[i])
}
// 2
// 3
// 4
// 5
```

使用forEach

```javascript
var arr = [2,3,4,5];
arr.forEach((item)=>console.log(item))
// 2
// 3
// 4
// 5
```

使用map、filter、some等方法都可以达到遍历数组的目的，不过这些方法都不能直接通过return来跳出循环，不过我们可以通过以下方式来实现跳出循环

```javascript
var arr = [2,3];
try{
    arr.forEach(function(item){
    	if(item === 3){
        	throw Error();
    	}
    	console.log(item);
    });
}catch(e){
}
// 2
```

使用for in

```javascript
var arr = [2,3];
for(let k in arr){
	console.log(arr[k]);
}
// 2
// 3
```

不过由于for in会将继承的属性和方法也遍历出来，如下所示

```javascript
Array.prototype.a = 123;
Array.prototype.foo = function(){};
var arr = [2,3];
for(let k in arr){
	console.log(arr[k]);
}
// 2
// 3
// 123
// function (){}
```

所以我们还得过滤一下

```javascript
Array.prototype.a = 123;
Array.prototype.foo = function(){};
var arr = [2,3];
for(let k in arr){
	if(arr.hasOwnProperty(k)){
		console.log(arr[k]);
	}
}
// 2
// 3
```

我们还可以使用for of来实现同样的效果，并且没有以上的问题

```javascript
var arr = [2,3];
for(let item of arr){
	console.log(item)
}
// 2
// 3
```

有时我们并不希望一次性遍历所有的数组项，而是根据需求来执行，此时我们就需要用到迭代器了，数组中有一个keys方法可以生成一个迭代器，如下

```javascript
var arr = [2,3];
var iterator = arr.keys();
console.log(iterator.next().value);
console.log('-----');
console.log(iterator.next().value);

// 0
// -----
// 1
```

返回的是索引 [Array.prototype.keys](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)

### 其他

实际上JavaScript中的数组并非是传统意义上的数组，而是一个关联数组，索引数组只是个表面现象，我们通过下标的方式去访问数组，它最终还是会被转换为字符串的。

```javascript
[2,3][1]
// 3
```

其实它是这样

```javascript
[2,3]["1"]
// 3
```

如果说javascript中的数组不是索引数组而是关联数组，那么我们在使用for循环时为什么可以按照顺序来输出呢？

```javascript
var arr = [2,3];
for(var i = 0, len = arr.length; i < len; i++){
	console.log(arr[i]);
}
// 2
// 3
```

如果我们仔细观察以上代码，会发现一个啃爹的现象，我们被欺骗了很久，我们是用0 1 2这样的形式去访问的数组，自然是按照顺序输出了，再看看下面这段代码，估计你就懂了

```javascript
var arr = [2,3];
console.log(arr[0]);
console.log(arr[1]);
// 2
// 3
```

你可是手动去访问人家某个具体属性的，你说能不是按照顺序输出吗。

这也就是为什么数组可以使用for in方法来循环的原因，因为本质上来讲数组具有对象的某些特性。





