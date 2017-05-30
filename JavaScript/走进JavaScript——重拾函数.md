## 走进JavaScript——重拾函数

### 创建函数

通过构造器的方式来创建函数，最后一个参数为函数体其他为形参

```javascript
new Function('a','b','alert(a)')
/* function anonymous(a,b) {
    	alert(a)
   }
*/
```

由于函数体是通过字符串拼接的，因此我们可以用这个特性来实现代码的组合

```javascript
function foo(){
	var a = 10;
	console.log(a);
}
new Function('say',foo + 'foo();console.log(say)')('Hello foo');
// 10
// Hello foo

// 实际上以上代码是这样的
function anonymous(say) {
  function foo(){
      var a = 10;
      console.log(a);
  }foo();console.log(say)
}
```

还可以用这个特性来实现json字符串转对象

```javascript
var json = '{a:123, b:456}';
new Function('return ' + json)();
// Object {a: 123, b: 456}
```

甚至我们可以利用它来实现重载运算符

```javascript
function calc(num1,num2,operator){
	return new Function('return ' + num1 + operator + num2)();
}
console.log(calc(2,3,'+'));
console.log(calc(5,2,'-'));
// 5
// 3
```

我们可以将返回的函数作为构造器来创建对象

```javascript
new new Function();
// Object {}
```

### 执行函数

函数名加()可以执行一个函数

```javascript
function foo(){
	console.log(123);
}
foo();
// 123
```

那如果没有函数名呢

```javascript
function(){};
// Uncaught SyntaxError: Unexpected token (
```

也就是不支持直接这么写，我们需要将以上函数改成一段表达式，将函数进行运算就成表达式了

```javascript
'' + function(){console.log(5)};
// "function (){console.log(5)}"
```

那么怎么执行它呢，在函数后面加()

```javascript
'' + function(){console.log(5)}();
// 5
```

以上代码不太优雅对吧，我们可以用一个()将它包起来

```javascript
(function(){console.log(123)}());
// 123
```

()也是会进行运算的

```javascript
(1) // 1
```

### 非惰性求值

只要你给函数传递参数它就会进行运算，并不会因为你没有使用它

```javascript
var a = 10;
(function(){}(a++,a++));
console.log(a); // 12
```

非惰性求值得另外一个例子就是在使用alert时

```javascript
var a = 1;
alert(a+=1,a++); // 2
console.log(a); // 3
```

第一个输出2是因为alert只接受一个参数，但由于函数是不限制参数个数的并且是非惰性求值所以alert中的第二个参数还是会被运算只是没有被alert使用罢了

### 函数中的callee、caller

callee的意义就在于当我们使用匿名函数时可以去调用函数本身

```javascript
var a = 0;
(function(){
	if(a > 3) return;
	console.log(++a);
	arguments.callee();
}());
// 1
// 2
// 3
// 4
```

还有一种情况是当我们重写函数时

```javascript
var a = 0;
function foo(){
	if(a > 2)return;
	console.log(++a);
	foo = null;
	arguments.callee();
}
foo()
// 1
// 2
// 3
```

caller的意义就在于我们能够知道此函数是被谁调用的

```javascript
function f1(){
	f2();
}
function f2(){
	console.log(arguments.callee.caller);
}
f1();
/* function f1(){
	f2();
}
/*
```

