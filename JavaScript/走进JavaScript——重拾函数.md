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
(1)
// 1
```

