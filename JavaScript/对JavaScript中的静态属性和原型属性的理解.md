## 对JavaScript中的静态属性和原型属性的理解

首先是在访问上的区别，当访问实例对象的某个属性但它本身没有时，它就会到原型中去查找，但不会去查找静态属性。

```javascript
// 实例对象不会去查找静态属性
function Foo(){}
Foo.a = 1;
var foo = new Foo();
foo.a // undefined

// 当实例对象没有某个属性时，会尝试去原型中查找
function Foo(){}
Foo.prototype.a = 1;
var foo = new Foo();
foo.a // 1
```

静态方法中的this指向调用它的对象，比如在下面代码中指向的就是调用它的Foo，原型方法中的this指向实例对象

```javascript
function Foo(){}
Foo.fn = function(){
	console.log(this);
};
Foo.prototype.fn = function(){
	console.log(this);
};
var foo = new Foo();
foo.fn(); // Foo {}
Foo.fn(); // function Foo(){}
```

静态属性和原型属性的区别就在于this的指向以及查找规则上，但this的指向问题并不是最重要的，拿实现链式调用来说

```javascript
// 通过原型实现链式调用
function Foo(){}
Foo.prototype.a = function(){
	console.log('a');
	return this;
};
Foo.prototype.b = function(){
	console.log('b');
	return this;
};
var foo = new Foo();
foo.a().b(); // a b

// 通过静态方法实现链式调用
function Foo(){}
Foo.a = function(){
	console.log('a');
	return this;
};
Foo.b = function(){
	console.log('b');
	return this;
};
Foo.a().b(); // a b
```

最大的区别还是在查找规则上，在原型上添加属性可以当做默认属性来使用

```javascript
function Foo(){}
Foo.prototype.a = 1;
var foo = new Foo(),
	foo2 = new Foo();
foo2.a = 2;
foo.a // 1
foo2.a // 2
```

每个实例对象都可以拥有自己的属性和方法，在没有设置的情况下才会去尝试使用prototype上的属性和方法，而静态方法是无法实现这种效果的。







