## JavaScript-可执行代码和执行上下文

#### 可执行代码类型

 一共有 3 种 ECMA 脚本可执行代码：

- 全局代码 是指被作为 ECMA 脚本 程序 处理的源代码文本。一个特定 程序 的全局代码不包括作为 函数体 被解析的源代码文本。

写成代码就是：

```javascript
function fn(){
  var a = 10;
}
fn();
console.log(a) //全局代码无法访问函数代码 Uncaught ReferenceError: a is not defined
```

- Eval 代码 是指提供给 eval 内置函数的源代码文本。更精确地说，如果传递给 eval 内置函数的参数为一个字符串，该字符串将被作为 ECMA 脚本 程序 进行处理。在特定的一次对 eval 的调用过程中，eval 代码作为该 程序 的 #global-code 部分。


写成代码就是：

```javascript
// 将eval中的字符串当做ecma脚本程序进行处理
eval("var a = 10;console.log(`a = ${a}`)"); //a = 10
// 注意如果不是在严格模式下执行eval，那么eval函数中的代码将作为全局代码来执行，如下我们访问一下前面在eval中定义的变量a
console.log(a) //10
// 在函数中执行eval
function fn(){
  eval("var o = 555;");
  console.log(o); //555
}
fn();
console.log(o); //Uncaught ReferenceError: o is not defined
// 严格模式下执行eval
'use strict'
eval("var o = 8;");
console.log(o); //Uncaught ReferenceError: o is not defined
```

- 函数代码 是指作为 函数体 被解析的源代码文本。一个 函数体 的 函数代码 不包括作为其嵌套函数的 函数体 被解析的源代码文本。 函数代码 同时还特指 以构造器方式调用 Function 内置对象 时所提供的源代码文本。更精确地说，调用 Function 构造器时传递的最后一个参数将被转换为字符串并作为 函数体 使用。如果调用 Function 构造器时，传递了一个以上的参数，除最后一个参数以外的其他参数都将转换为字符串，并以逗号作为分隔符连接在一起成为一个字符串，该字符串被解析为 形参列表 供由最后一个参数定义的 函数体 使用。初始化 Function 对象时所提供的函数代码，并不包括作为其嵌套函数的 函数体 被解析的源代码文本。


解释：

```javascript
//一个 函数体 的 函数代码 不包括作为其嵌套函数的 函数体 被解析的源代码文本。
function fn(){
  function child(){
    var a = 10;
  }
  console.log(a) //父函数无法访问子函数 Uncaught ReferenceError: a is not defined
}
//调用 Function 构造器
new Function("a","console.log(a)")(132); //132
//初始化 Function 对象时所提供的函数代码，并不包括作为其嵌套函数的 函数体 被解析的源代码文本。
(function(){
  var o = 5;
  new Function("console.log(o)")(); //Uncaught ReferenceError: o is not defined
}());
//或
new Function("var a = 10;new Function('alert(a)')()")() //Uncaught ReferenceError: a is not defined
//解决方案
(function(){
  var o = 5;
  new Function("o","console.log(o)")(o); //5
}());
```

一个词法环境由一个环境记录项和可能为空的外部词法环境引用构成。通常词法环境会与特定的 ECMAScript 代码诸如 FunctionDeclaration,WithStatement 或者 TryStatement 的 Catch 块这样的语法结构相联系，且类似代码每次执行都会有一个新的语法环境被创建出来。

 环境记录项记录了在它的关联词法环境域内创建的标识符绑定情形。

外部词法环境引用用于表示词法环境的逻辑嵌套关系模型。（内部）词法环境的外部引用是逻辑上包含内部词法环境的词法环境。外部词法环境自然也可能有多个内部词法环境。例如，如果一个 FunctionDeclaration 包含两个嵌套的 FunctionDeclaration，那么每个内嵌函数的词法环境都是外部函数本次执行所产生的词法环境。

解释：

```javascript
function fn(){
  var a = 10;
  function child(){
    console.log(a) //10
  }
}
```

这个child函数表示内部词法环境，而fn函数表示外部词法环境。

#### 环境记录项

在本标准中，共有 2 类环境记录项： 声明式环境记录项 和 对象式环境记录项 。声明式环境记录项用于定义那些将 标识符 与语言值直接绑定的 ECMA 脚本语法元素，例如 函数定义 ， 变量定义 以及 Catch 语句。对象式环境记录项用于定义那些将 标识符 与具体对象的属性绑定的 ECMA 脚本元素，例如 程序 以及 With 表达式 。

**ImplicitThisValue**：返回this的值，如果是Declarative Environment Records则总是返回`undefined`；如果是Object Environment Records：`provideThis==true`则返回bindingObject，否则返回`undefined`

##### [ImplicitThisValue()]()

 声明式环境记录项永远将 undefined 作为其 ImplicitThisValue 返回。

1. 返回 undefined。

对象式环境记录项的 ImplicitThisValue 通常返回 undefined，除非其 provideThis 标识的值为 true。

1. 令 envRec 为函数调用时对应的声明式环境记录项。
2. 如果 envRec 的 provideThis 标识的值为 true，返回 envRec 的绑定对象。
3. 否则返回 undefined。

### [进入函数代码]()

 当控制流根据一个函数对象 F、调用者提供的 thisArg 以及调用者提供的 argumentList，进入 函数代码 的执行环境时，执行以下步骤：

1. 如果 函数代码 是 严格模式下的代码 ，设 this 绑定为 thisArg。
2. 否则如果 thisArg 是 null 或 undefined，则设 this 绑定为 全局对象 。
3. 否则如果 Type(thisArg) 的结果不为 Object，则设 this 绑定为 ToObject(thisArg)。
4. 否则设 this 绑定为 thisArg。
5. 以 F 的 [[Scope]] 内部属性为参数调用 NewDeclarativeEnvironment，并令 localEnv 为调用的结果。
6. 设词法环境为 localEnv。
7. 设变量环境为 localEnv。
8. 令 code 为 F 的 [[Code]] 内部属性的值。
9. 按 [10.5](#10.5) 描述的方案，使用 函数代码 code 和 argumentList 执行定义绑定初始化步骤。














this是个关键字 他会返回当前上下文中的this value

解释执行 全局代码 或使用 eval 函数输入的代码会创建并进入一个新的执行环境。每次调用 ECMA 脚本代码定义的函数（13.2.1）也会建立并进入一个新的执行环境，即便函数是自身递归调用的。每一次 return 都会退出一个执行环境。抛出异常也可退出一个或多个执行环境。

 当控制流进入一个执行环境时，会设置该执行环境的 this 绑定，定义变量环境和初始词法环境，并执行定义绑定初始化过程（10.5）。以上这些步骤的严格执行方式由进入的代码的类型决定。

this的确定：

抽象操作ResolveThisBinding使用运行执行上下文的LexicalEnvironment来确定关键字的绑定。 ResolveThisBinding执行以下步骤：

1. Let *envRec* be [GetThisEnvironment](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-getthisenvironment)( ).
2. Return *envRec*.GetThisBinding().

GetThisEnvironment ( )

GetThisEnvironment通过查找当前提供关键字绑定的环境记录，执行以下步骤：

让lex成为正在运行的执行上下文的LexicalEnvironment。