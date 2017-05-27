## 走进JavaScript——重拾Object

### 创建对象

Object构造器的参数如果为空或null、undefined将返回一个空的Object对象，如果为其他值则调用相应的构造器，如

```javascript
new Object()
// Object {}
new Object(null)
// Object {}
new Object(undefined)
// Object {}
new Object(1)
// Number {[[PrimitiveValue]]: 1}
new Object("a")
// String {0: "a", length: 1, [[PrimitiveValue]]: "a"}
new Object({})
// Object {}
new Object([1,2,3])
// [1, 2, 3]
new Object(function(){})
// function (){}
```

如果传递多个参数取第一个，由于使用构造器来创建对象需要判断参数所以一般比我们直接使用字面量{}创建对象要慢一些。

我们也可以自己定义一个构造器来创建对象，如下

```javascript
function CreateObj(){}
var obj = new CreateObj();
obj.a = 10;
// 10
```

这些方法创建的对象都不是一个真正干净的对象，如果希望创建一个没有原型继承的空对象则可以使用Object.create方法

```javascript
Object.create(null)
// Object {} No Properties
```

### 遍历对象

for in

```javascript
var obj = {html:111,javascript:222};
for(let key in obj){
	console.log(obj[key]);
}
// 111
// 222
```

for in会将原型继承中的值也循环出来，因此我们需要过滤一下

```javascript
// 没过滤之前
Object.prototype.a = '捣乱的';
var obj = {html:111,javascript:222};
for(let key in obj){
	console.log(obj[key]);
}
// 111
// 222
// 捣乱的

// 过滤之后
Object.prototype.a = '捣乱的';
var obj = {html:111,javascript:222};
for(let key in obj){
	if(obj.hasOwnProperty(key)){
		console.log(obj[key]);
	}
}
// 111
// 222
```

我们也可以用for来循环对象，不过我们得先使用Object.keys来取对象的key

```javascript
Object.prototype.a = '捣乱的';
var obj = {html:111,javascript:222};
var arr = Object.keys(obj);
for(let i = 0; i < arr.length; i++){
	console.log(obj[arr[i]]);
}
// 111
// 222
```

for of

```javascript
Object.prototype.a = '捣乱的';
var obj = {html:111,javascript:222};
for(let key of Object.keys(obj)){
	console.log(obj[key]);
}
// 111
// 222
```

### 对象与其他值的运算

和对象、function相加会转换成字符串拼接，如果是其他值则会转换为数字

```javascript
{} + null
// 0
{} + undefined
// NaN
{} + 'a'
// NaN
{} + '111'
// 111
{} + {}
// "[object Object][object Object]"
{} + [2]
// 2
{} + function(){}
// "[object Object]function (){}"
```

如果是相减则会将对象转换为-0（注意是-0），如果是对象减对象则是NaN

```javascript
{} - ''
// -0
{} - []
// -0
{} - null
// -0
{} - undefined
// NaN
{} - {}
// NaN
{} - function(){}
// NaN
{} - 2
// -2
```

为什么说对象被转换成负0而不是0呢，我们用一个例子来证明

```javascript
0 - 0
// 0
-0 - 0
// -0
```

所以说对象被转换成-0而不是0





