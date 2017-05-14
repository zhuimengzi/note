### 为急躁的程序员准备的javascript基础

## 1 前言

如果你已经知道如何编程，这篇博客将会让你尽可能快的掌握[JavaScript](http://lib.csdn.net/base/javascript)基础。在这篇博客里面包含了 可以让你进行编程的javascript的一个最小子集。我称这个子集为”javascript基础“，并且我推荐在 接触到大量的细节之前，就开始使用这个子集进行编程，因为一下子学习所有总会让人迷惑，所以，一步一步 来。

## 2 这篇文章的使用习惯约定

### 2.1 命令行的使用

当我介绍一个新的概念的时候，我会在javascript的命令行（chrome就有这个命令行）中来举例说 明。（翻译之后就使用alert来代替，类似下面这样：）

```
alert(7+3);//10

```

在大于号之后输入的内容，都会由javascript引擎来输出。另外这个console.log()方法也会用来 打印信息（这个方法在大多数的javascript的环境中都是有效的，包括[Node.js](http://lib.csdn.net/base/nodejs)）。

### 2.2 寻找文档

有时候，你需要看一些方法的细节，来搞清楚这些方法是如何工作的。这些细节，在[Mozilla Developer Network](https://developer.mozilla.org/en-US/)(MDN) 都可以找到。另外，也可以在google上搜索这些文档。例如，下面这个搜索是用来 寻找关于push()这个方法的文档：[ mdn array push](https://www.google.com/search?q=mdn+array+push) 。

## 3 这门语言的起源

这一节介绍一点javascript的起源，帮助你理解为什么是这样。

### 3.1 javascript 与 ECMAScript

这门编程语言被叫做javascript,而这门语言的标准叫做ECMAScript.他们有着不同的名称，因为 还有另外一门语言叫“[Java](http://lib.csdn.net/base/javase)”（所以[Oracle](http://lib.csdn.net/base/oracle)公司）。于此同时，只有Mozilla官方允许使用“javascript” ,因为他们在很久以前就拥有了这个执照。因此，这个开放语言标准组织不得不使用一个不同的名称，当前 的javascript的版本是ECMAScript5,ECMAScript6正在[开发中](http://www.2ality.com/2012/11/guide-esnext.html) 。

### 3.2 影响

js的创造者，Brendan Eich，在很短的时间内创造出了这门语言，而且还已经在网景公司开始使用。 在创造的时候，借鉴了以下的语言：

- 在区分原生数据类型和对象的问题上借鉴了java语言。
- 方法在js中是使用频率很高的，而在如何处理方法这方面的灵感则来自于Scheme和AWK。另外，闭包使

方法成为了一个很有用的方法。

- 面向对象编程是js的一个独特风格。js面向对象编程的一个杀手级特性就是你可以任意的创造对象，

而不需要事先创建一个类或者是其他的什么。

- Perl 和 python在影响着js处理字符串，数组和正则表达式。

js在ECMAScript3出现之前是没有异常处理的。这就可以解释为什么这门语言为什么如此频繁的自动强制 转换而且出错的时候总是那么沉默，是因为它从一开始就没有抛出异常。

一方面，js一个奇葩的地方就是缺少很多功能（例如块级变量，模块，对子类型的支持等等）。另一方面，它 又有一系列的很有用的特性让你来解决这些问题。在其他的语言中，你学的是语言特性，在js中，你得经常 学习模式。

### 3.3 进阶读物

- [JavaScript: how it all began](http://www.2ality.com/2011/03/javascript-how-it-all-began.html)
- [JavaScript: the glass is half full](http://www.2ality.com/2012/09/javascript-glass-half-full.html)[什么使js如此有吸引力？]
- [ECMAScript: ES.next versus ES 6 versus ES Harmony ](http://www.2ality.com/2011/06/ecmascript.html)[包括ECMAScript版本的历史]
- [Perl and Python influences in JavaScript](http://www.2ality.com/2013/02/javascript-influences.html)

## 4 语法

这一章节介绍一些简单的js的语法基础。

### 4.1 语句和表达式

js有两大类的语法分类：语句和表达式

- 语句用来说明“做什么”。一个程序是由一系列的语句构成的。生命一个变量的语句如下：

  ```
  var foo;

  ```

- 表达式用来产生值，表达式的右边一般是一个赋值或者一个函数。以下是表达式的一个例子：

  ```
  3*7

  ```

对于表现表达式和语句之间的不同的最好的方法就是看他们如何让实现if-then-else。语句实现：

```
var x;
if(y >= 0){
  x = y;
}else{
  x = -y;
}

```

表达式实现：

```
var x = y>=0 ? y:-y;

```

你也可以使用后面一种方法来做为一个方法的参数：

```
myFunction(y >=0 ?y:-y);

```

无论js中需要什么样的语句，都可是使用表达式来替代，如下例：

```
foo(bar(7,1));

```

foo(..);是一个语句（也称之为表达式语句），bar(7,1)则是一个表达式。但是这两者都是 方法的调用。

### 4.2 控制流语句和语句块

对于控制流语句，这个主体可以只有一条语句，例如：

```
if(obj !== null) obj.foo();

while(x>0)x--;


```

然而，任何语句都可以被替换成一个语句块，一对花括号可以包含0到多条语句，因此，你也可以这么 写：

```
if(obj !== null){
    obj.foo();
}

while(x > 0){
    x--;
}

```

在这篇文章中，我们是由后面一种形式。

### 4.3 分号

在js中，分号是可有可无的。但是漏写它们总是会出现一些意外，这就是为什么我推荐加分号的原因。 在上面也可以看到，结束语句的是分号，而不是花括号。你有时候可以看到一个方法的结束也是使用 分号来实现的：

```
var x = 3*7;
var f = function(){};

```

### 4.4 注释

js有两种注释的形式，单行注释和多行注释。 单行注释是在这行语句的末尾用//开始的：

```
x++;//单行注释

```

多行注释是使用/*和*/来实现的

```
/**
  这是一个
  多行注释。
*/

```

### 4.5 进阶阅读

- [Expressions versus statements in JavaScript](http://www.2ality.com/2013/06/basic-javascript.html#jssect_learn_next)
- [Automatic semicolon insertion in JavaScript](http://www.2ality.com/2013/06/basic-javascript.html#jssect_learn_next)

## 5 变量和赋值

变量在js中必须先声明后使用。

```
var foo;

```

### 5.1 赋值

你可以在声明一个变量的同时给他赋值：

```
var foo = 6;

```

你也可以给一个已经存在的变量赋值：

```
foo = 4;

```

### 5.2 复合赋值操作符

js中有一些符合赋值操作符，类似+=，下面这两条语句是等价的：

```
x += 1;
x = x+1;

```

### 5.3 标识符合变量名称

标识符就是一些事务的名称，它们在js中扮演这个一个很重要的角色。例如，变量的名称就是标识符。 一般来说，标识符的第一个字符可以是任何的Unicode字母，比如一个$,或者一个_,后续的字符可以 是任何的Unicode 字符.因此，下面的这些都是合法的标识符：

```
arg(),_tmp,$elm,

```

下面的这些标识符则被称之为保留字，他们是js语法的一个部分，所以不能用作变量名称：

```
arguments break case catch class const continue debugger default
delete do else enum eval export extends false finally for function 
if implements import in instanceof interface let new null package
 private protected public return static super switch this throw true
  try typeof var void while with yield

```

从技术上来说，下面的这些标识符不是保留字，但是他们也不应该用作变量的名称：

```
Infinity NaN undefined

```

### 5.4 进阶阅读

- [Valid JavaScript variable names](file:///C:/Users/rayjun/Documents/GitHub/myblog/think/%E4%B8%BA%E6%80%A5%E8%BA%81%E7%9A%84%E7%A8%8B%E5%BA%8F%E5%91%98%E5%87%86%E5%A4%87%E7%9A%84javascript%E5%9F%BA%E7%A1%80.html#www.2ality.com-2013-06-basic-javascript.html-jssect_learn_next)

## 6 类型

js中有编程所需的所有类型：booleans,numbers,stings,arrays等。js中的所有类型都有属性， 每个属性都有一个键值对，你可以使用.来取得一个属性。

```
value.propKey;

```

例如，字符串'abc'有length这个属性：

```
var str = "abc";
alert(str.length);//3

```

上面的代码也可以写成：

```
alert('abc'.length);

```

这个.操作符也可以用来对一个属性的值进行赋值：

```
var obj = {};
obj.foo = 123;
alert(obj.foo);//123


```

你也可以这样调用一个方法：

```
'hello'.toUpperCase();//'HELLO'

```

### 6.1 原生数据类型与对象

js强制使得不同的类型之间有些不同：

- 原生数据类型：booleans,numbers,strings,null,undefined.
- 其他的所有类型都是对象。所有被定义的类型都不是原生数据类型。

原生数据类型与对象这件有一个主要的不同：每个对象有一个唯一的标识，而且只等于它们自身。

```
var obj1 = {};
var obj2 = {};
alert(obj1 === obj2);//false
alert(obj1 === obj1);//true

```

相反的是，原生数据类型只要有相同的值就可以被认为是相等：

```
var prim1 = 123;
var prim2 = 123;
alert(prim1 === prim2);//true

```

接下来的两节内容将来详细的解释原生数据类型和对象。

### 6.2 原生数据类型

下面的这些都是原生数据类型：

- Booleans:true,false
- Numbers:1736,1.345
- Strings:'abc',"abc"
- 两个空值：undefined,null

原生数据类型的特点：

- 可以进行值得比较

  ```
  alert(3 === 3);//true
  alert('abc' === 'abc');//true

  ```

- 被创建之后总是不变的，每个类型不可以被改变，也不可以增加或者减少属性：

```
var str = 'abc';
str.foo = 3;//尝试给str增加一个属性，没有反应。。
alert(str.foo);//undefined

```

去读取一个未知的属性一般返回undefined。

- 你不能定义自己的原生类型。

### 6.3 对象

所有非原生的数据类型都是对象。最常见的几种对象如下：

- 简单对象（object类型）：

```
{
   firstName:'jane',
   lastName:'doe'
}

```

上面那个对象有两个属性：firstName的值是'jane',lastName的值是：'doe'.

- 数组(Array类型)

```
['apple','banana','cherry']

```

上面那个数组可以通过数字下标来访问，例如，'apple'的下标就是0。

- 正则表达式（RegExp类型）

```
/^a+b+$/

```

对象的特性：

- 通过引用来比较，标识是可以比较的，每个对象有自己的标识。

```
alert({}==={});//fasle
var obj1 = {};
var obj2 = {};
alert(obj1 === obj2);//true


```

- 属性可以变化(增加或者减少)

```
var obj = {};
obj.foo = 123;
alert(obj.foo);//123

```

- 继承

你可以通过构造函数来定义新的对象类型。 所有的数据类型都是对象，但是不是所有的对象都是数据类型。例如，正则表达式是对象，但是不是 [数据结构](http://lib.csdn.net/base/datastructure)。

### 6.4 undefined 和 null;

js有两个'空值'，undefined和null。

- undefined意味着“no-value”，没有初始化的值就是undefined:

```
var foo;
alert(foo);//undefined

```

读取一个不存在的属性也会得到undefined:

```
var obj = {};
alert(obj.foo);//undefined

```

缺少参数也会得到undefined：

```
function f(x){return x};
f();//undefined

```

- null意味着“no object“，这个也可以被当作是no-value,当在操作一个object的时候。

一般来说，你应该平等的对待undefined和null，严格的检测方法如下：

```
if(x === undefined|| x === null){

}

```

另外一个检测的方法的如下，这是因为undefined 和 null 都被认为是fasle。

```
if(!x){

}

```

另外：false,0,NaN和''都被认为是fasle。

### 6.5 包装类型

Foo（代表任何对象，包括内置的例如Array和其他的自定义的类型）类型的实例都是在Foo.prototype 获取它们的方法。你可以做如下的验证：

```
[].push === Array.prototype.push //true

```

相反，原生数据类型不能做到这些，所以每个原生数据类型都有一个相关联的对象类型，称之为包装 类型：

- boolenas的包装类型是Boolean,booleans从Boolean.prototype上面获取方法。

```
true.toString === Boolean.prototype.toString //true

```

注意这个包装类型的名称是以大写字母开始的。

- numbers 的包装类型是Number.
- strings 的包装类型是String.

包装类型也有实例（他们的实例也是对象），但实际上这些实例永远也不会用。相反，包装类型有其他的 用处，如果把他们当作方法调用，它们可以将参数转化成原生数据类型。

```
Number('123'); //123
String(true); //'true'

```

### 6.6 通过typeof 和instanceof来划分类型

js提供两个方法来划分类型，typeof 主要用来划分原生数据类型，instanceof 主要用来划分对象。 typeof会返回一个字符串来标识这个值的类型：

```
typeof true;  //booelan
typeof 'abc'; //string
typeof {}; //object
typeof []; //object

```

下面是typeof的返回值得一个列表:

| operand          | Result      |
| ---------------- | ----------- |
| undefined        | 'undefined' |
| null             | 'object'    |
| Boolean value    | 'boolean'   |
| Number value     | 'number'    |
| String value     | 'string'    |
| Function         | 'function'  |
| All other values | 'object'    |

- function的类型是'function',而不是'object',Function是Object的子类，这个没有错。
- null返回的类型是'object'.这个地方是一个bug，而且没法修正。

instanceof 会返回一个true，如果检测的类型是匹配的：

```
var b = new Bar();
b instanceof Bar ; //true
{} instanceof Object;//true
[] instanceof Array; //true
[] instanceof Object; //true

```

### 6.7 进阶阅读

- [Categorizing values in JavaScript](http://www.2ality.com/2013/01/categorizing-values.html)
- [Improving the JavaScript typeof operator](http://www.2ality.com/2011/11/improving-typeof.html)

## 7 Booleans

原生的boolean类型包含true和false两个值。以下的这些操作符会产生布尔值：

- 二进制逻辑操作符：&&,||
- 非操作符：！
- 相等操作符： === ,!== ,== ,!=
- 排序操作符： >,>=,<,<=

### 7.1 真 和 假

当js期望一个boolean的时候，任何值都是可以用的，这些值将会被解释为true或者false，以下 的这些值将会被解释为false:

- undefined,null
- Boolean:false
- NUmber: -0,NaN
- String:''

其他所有的值都会被解释为true。将Boolean当作方法可以检验一个值是如何被解释的：

```
Boolean(undefined); //false
Boolean(0); //false
Boolean(3); //true


```

### 7.2 二进制逻辑操作符

二进制逻辑操作符在js中是遵循短路原则的。短路就是如果第一个运算可以决定结果，那么后续的 运算将不再进行。例如，下面的foo()函数将永远不再执行：

```
false && foo();
true || foo();

```

另外，二进制逻辑操作符将会返回两个操作对象中的一个，即使操作对象不是一个一个布尔值。通过 真假性的检查来决定返回哪一个：

- && 操作符：如果第一个操作对象为假，就返回第一个，否则，返回第二个。

  ```
  NaN && 'abc' //NaN
  123 && 'abc' //'abc'

  ```

- || 操作符：如果第一个操作对象为真，就返回第一个，否则，返回第二个。

  ```
  'abc' || 123 //'abc'
  '' || 123   //123

  ```

### 7.3 相等运算符

检查js中的相等性，你可以使用严格相等(===)和严格不相等(!==),也可以使用相等(==)和不相等 (!=)。按照经验来说，一般都使用严格相等操作符，就当作普通的相等操作符不存在。严格模式的相等性 检查要更安全。

### 7.4 进阶阅读

- [Equality in JavaScript: === versus ==](http://www.2ality.com/2011/06/javascript-equality.html)

+[When is it OK to use == in JavaScript?](http://www.2ality.com/2011/12/strict-equality-exemptions.html)

## 8 Numbers

在js中所有的数字都是浮点型(即使绝大多数的js引擎也使用整型)。

```
1 === 1.0 //true

```

特别的数字

- NaN('不是数字')：一个错误的值

  ```
  Number('xyz'); //NaN

  ```

- Infinity :一般也是指一个错误的值，一般在运算中。

  ```
  3/0  //Infinity
  Math.pow(2,1024) //Infinity

  ```

  Infinity有时候是很有用的，因为它大于其他任何数，相似的，-Infinity也小于其他任何数。

- -0：js中有两个0，+0和-0，一般情况下，你是看不到这两个0的，因为它们都直接表现为0：

  ```
  +0 //0
  -0 //0

  ```

  因此，最好就是认为只有一个0，因为+0和-0的布尔值都是false。

### 8.1 运算符

js中有以下的算术运算符：

- 加 ： number1 + number2
- 减 ： number1 = number2
- 乘 ： number1 * number2
- 除 ： number1 / number2
- 求余 ： number1 % number2
- 自增 ： ++varible,varible++
- 自减 ： –varible,varible++
- 负号 ： -value

js通过全局对象Math通过方法提供了更多的算术运算方式。js也提供了位运算符。

### 8.2 进阶阅读

- [How numbers are encoded in JavaScript](http://www.2ality.com/2012/04/number-encoding.html)
- [JavaScript’s two zeros](http://www.2ality.com/2012/03/signedzero.html)
- [Integers and shift operators in JavaScript](http://www.2ality.com/2012/02/js-integers.html)
- [NaN and Infinity in JavaScript](http://www.2ality.com/2012/02/nan-infinity.html)
- [Working with large integers in JavaScript](http://www.2ality.com/2012/07/large-integers.html)

## 9 Strings

字符串可以通过字符串字面值来创建，这些字面值可以被单引号或者双引号引起来，反斜杠(\) 可以对一些特殊字符进行转意：

```
'abc'
"abc"
'Did she say "Hello"?'
"Did she say \"Hello\"?"

'That\'s nice!'
"That's nice!"

'Line1 \n Line2'
'Backlash:\\'

```

单个的字符串可以通过方括号来访问：

```
var str = 'abc';
str[1] //'b'

```

length属性可以计算这个字符串总共有多少个字符：

```
'abc'.length //3

```

字符串在创建之后就是不可变的，如果需要改变现有的一个字符，你就必须要创建一个新的。

### 9.1 字符串操作符

字符串是通过'+'来进行连接的，在被'+'连接的操作对象中，只要有一个是字符串，那么连接的 结果就是一个字符串。

```
var messageCount = 3;
'You have '+ meaasgeCount+ 'meaasges' //You have 3 meaasges

```

字符串拼接也可以分为多步，通过使用+=操作符：

```
var str = '';
str += 'Multiple';
str += 'pieces';
str += 'are concatenated';
str //'Multiple pieces are concatenated'

```

### 9.2 字符串方法

字符串也有很多有用的方法：

```
'abc'.slice(1) //'bc'

'abc'.slice(1,2) //'b'

'\t xyz'.trim()   //'xyz'

'mjlnir'.toUpperCase() //MJLNIR

'abc'.indexOf('b')   //1

'abc'.indexOf('x')   //-1

```

### 9.3 进阶阅读

- [String concatenation in JavaScript](http://www.2ality.com/2011/10/string-concatenation.html)
- [JavaScript: single quotes or double quotes?](http://www.2ality.com/2012/09/javascript-quotes.html)

## 10 Statements

### 10.1 条件句

if 语句使用一个布尔值来判断接下来是执行一个then语句块还是一个else语句块：

```
if(myvar === 0){
   //then
}

if(myvar === 0){
  //then
}else{
  //else
}

if(myvar === 0){
  //then
}else if(myvar === 1){
  //else if
}else if(myvar === 2){
  //else if
}else{
  //else
}

```

### 10.2 循环

for循环遵循下面的格式： for(initalization;loop while this condition holds;next step)

例如：

```
for(var i = 0;i < arr.length;i++){
    console.log(arr[i]);
}

```

while循环在满足条件的时候会一直执行代码块：

```
//实现与上面的for循环一样的功能
var i = 0;
while(i < arr.length){
   console.log(arr[i]);
   i++;
}

```

do-while循环在满足条件的时候也会一直执行代码块，因为条件判断在代码块之后， 所以do-while循环在条件判断之前会先执行一次代码块：

```
do{
   //..
}while(condition)

```

对于所有的循环：

- break 会中断循环
- continue 开始一次新的循环

## 11 Functions

定义函数的一种方法是通过function声明：

```
function add(param1,param2){
  return param1 + param2;
}

```

上面的代码定义了一个add方法，这个方法有两个参数，方法的返回值是这两个参数的 和。下面是展示如何调用这个方法：

```
add(6,1)  //7

add('a','b') //'ab'

```

另外一种方法定义add()是通过 function 表达式：

```
var add = function(param1,param2){
    return param1 + param2;
};

```

一个函数表达式可以产生一个值，因此可以直接使用一个函数表达式作为其他函数的参数：

```
someOtherFunction(function(p1,p2){....});

```

### 11.1 函数声明被提前

函数的声明会被提前，声明会被提前到当前的作用域的最前面。这个就允许你在函数的声明 之前就调用函数：

```
/**
  在下面foo()的作用域当中，bar();这个语句在函数的实现代码之前就进行了调用，
 但这种做法是可以的，因为在代码被执行的时候，foo作用域当中的所有的函数声明都会
 被提前到作用域的最前面，所以实际上，函数的调用还是在函数的声明之后。
*/
function foo(){
   bar();

   function bar(){
       //...
   }
}

```

有一点需要注意，var所声明的函数或者变量也会提前，但是var的赋值，或者函数的实现则不会 提前：

```
/**
  在这种实现中，这种方式就是错误的，因为var bar这个声明会被提前，但是bar的实现则不会
  提前，所以在bar()，调用的时候还是undefined。所以会出错。
*/
function foo(){
   bar();
   var bar = function(){
      //..
   };
}

```

### 11.2 特殊的变量：arguments

在js的函数调用中，你可以使用任何个数的参数，js从来就不会抱怨这个。js实现这个功能是通过 一个特殊的变量来实现的：arguments。arguments看起来很像一个数组，但是却没有数组的任何方法。

```
function f(){return arguments;};

var args = f('a','b','c');

args.length   //3
args[0]     //'a'

```

### 11.3 参数过多或者过少

我们通过以下的方法来检验一下，参数过多或者过少是如何被处理的：

```
function f(x,y){
   console.log(x,y);
   console.log(toArray(arguments));
}

f('a','b','c')     //a b ,['a','b','c']

f('a')     //a undefined,['a']

f()        // undefined undefined, []

```

通过以上的验证我们可以看到，多余的参数将会被忽略，但是会被保存到arguments中。 如果缺少参数，那么缺少的那个参数则会是undefined.

### 11.4 可选参数

以下就是一种很常用的模式来为参数赋值：

```
function pair(x,y){
   x = x||0;
   y = y||0;
   return [x,y]
};

pair()    //[0,0]
pair(3)   //[3,0]
pair(3,5) //[3,5]

```

用上面的那种方法，如果没有传入足够的参数，那些没有被传入的参数则会被赋值为0，这样就可以避免 undefined的情况出现。

### 11.5 强制规定参数数量

如果你想强制规定参数的数量，可以通过检验arguments.length来实现：

```
function pair(x,y){
    if(arguments.length !== 2){
        throw new Error('Need exactly 2 arguments');
    }
};

```

### 11.6 将arguments转换成数组

arguments很像一个数组，但是却不是一个数组。它有一个length属性并且可以通过 方括号去访问其中的元素。但是却没办法删除任何元素以及使用任何array方法。因此 有时候，你需要将它转换成一个数组。用以下的方法：

```
function toArray(arrayLikeObject){
   return [].slice.call(arrayLikeObject);
}

```

### 11.7 进阶阅读

- [JavaScript quirk 5: parameter handling](http://www.2ality.com/2013/05/quirk-parameters.html)

## 12 异常处理

最常见的异常处理的代码如下所示：

```
function throwException(){
    throw new Error('Problem');
}

try{
   throwException()
}catch(e){
   console.log(e);
   console.log(e.stack);
}

```

try包含哪些可能出问题的代码，这个catch块会在try块里面抛出异常的时候执行。

### 12.1 进阶阅读

- [Subtyping JavaScript builtins in ECMAScript 5](http://www.2ality.com/2011/12/subtyping-builtins.html) [especially relevant for errors]

## 13 严格模式

严格模式会执行一些检查以及一些措施使得js稍微整洁一点。这个是推荐使用的。使用起来很简单，只需要 在一个js文件或者一段js代码的前面加上以下代码：

```
'use strict';

```

也可以在每一个方法中使用严格模式，只需要将上面的代码加入方法开始的地方：

```
function functionInStrictMode(){
   'use strict';
}

```

在下面的两个小节中你可以看到严格模式带来的三个巨大的好处。

### 13.1 明确的错误

让我们看一个例子，严格模式如何抛出一个明确的错误。如果不使用严格模式，这个错误则会静悄悄的出现。 下面的这个f()方法在做一些不符合规则的事，它试图改变这个只读属性length的值：

```
function f(){
    'abc'.length = 5;
}

```

当你调用这个方法的时候，错误会默默的出现，而且这个赋值将会被忽略。让我们把这个改成严格模式下：

```
function f(){
    'use strict';
    'abc'.length = 5;
}
//调用这个方法时候，将会出现：TypeError: Cannot assign to read only property 'length' of abc

```

### 13.2 方法中的this

js中的this与其他语言中的this有所不同，this的值会变化，但也有不变的， 那就是this指的是 调用函数的那个对象。 在严格模式中，如果没有其他对象来调用这个方法，那么this的返回值将是undefined:

```
function f_strict(){
   'use strict';
   return this;
}
console.log(f_strict() === undefined);//true

```

在非严格的模式中，将会返回全局对象window：

```
function f(){
   return this;
}
console.log(f() === window); //true

```

### 13.3 不会自动创建全局变量

在非严格模式中，如果对一个没有声明的变量复制，js会自动将这个变量转化成全局变量：

```
function f(){foo = 5};
f(); //不会报错
foo  //5

```

在严格模式中，将会报错：

```
function f_strict(){'use strict'; foo2 =4};
f_strict() //ReferenceError: foo2 is not defined

```

### 13.4 进阶阅读

- [JavaScript’s strict mode: a summary](http://www.2ality.com/2011/01/javascripts-strict-mode-summary.html)

## 14 方法范围和闭包

在js中，在你使用一个变量之前你必须先声明它：

```
var x;
x = 3;
y = 4; //ReferenceError: y is not defined

```

你可以声明一系列的变量而只用一个var字段：

```
var x = 1,y =2,z =3;

```

但是我推荐一个语句只对应一个变量，上面的代码可以重写为:

```
var x = 1;
var y = 2;
var z = 3;

```

由于声明会提前（之前提到的），所以最好是在方法的最前面就声明并初始化这个变量。

### 14.1 变量是方法作用域的

变量的作用域时一个完整的方法，而不是当前的代码块：

```
function foo(){
    var x = -3;
    if(x < 0){
        var tmp = -x;
    }
    console.log(tmp); //3
}

```

我们可以看到tmp并不是在方法开始的时候声明的，但是却一直存在到方法结束。

### 14.2 声明被提前

变量的声明是被提前的，这个声明会被提到方法开始的地方，但是赋值却不会被提前。看下面的例子：

```
function foo(){
   console.log(tmp); //undefined

   if(false){
       var tmp = 3;
   }
}

```

上面的代码实际上是这么执行的：

```
function foo(){
   var tmp;
   console.log(tmp);
   if(false){
       tmp = 3;
   }
}

```

### 14.3 闭包

每个方法都会与方法内的变量保持一个联系，甚至这个变量不是产生在它的作用域的时候：

```
function createIncrementor(start){
    return function(){ //*
       return start++;
    }
}

```

上面那个方法里面从*开始的那个段代码在运行之后就离开了上下文，但是却一直维护这个 start这个变量：

```
var inc = createIncrementor(5);
inc() //5
inc() //6
inc() //7

```

因此，闭包就是一个方法加上这个方法与其作用域里面变量之间的联系。所以createIncrementorf 方法返回的就是一个闭包。

### 14.4 IIFE:模拟范围

有时候你需要模拟出一个范围，来阻止一个变量成为全局变量。这种模式称之为函数表达式IIFE (Immediately Invoked Function Expression):

```
(function(){ 
   var tmp= ...; //这不是一个全局变量
}());

```

看以上代码，你可以看到一个函数表达式立马就执行了。括号阻止这条语句被解释成一个函数声明： 这个表达式也会被立刻执行。这个方法形成了一个新的作用域并且阻止tmp成为一个全局变量。

### 14.5 闭包间的共享

下面这是一个简单的问题，但是如果你不注意，也会让你很头疼。因此，简单浏览一下，有个大概的 印象。 闭包可以与外部的变量保持联系，有时候就会造成你不想要的结果：

```
var result = [];
for(var i = 0;i < 5;i++){
   result.push(function(){return i});
}
console.log(result[1]()); //5(not 1)
console.log(result[3]()); //5(not 1)

```

以上代码返回的值一直都是当前的i（i与闭包一直有联系），而不是这个闭包创建时的那个值。这个循环结束的时候，i是5， 所以数组里面所有的值都是5。如果想改变这个情况，可以使用IIFE：

```
for(var i = 0;i < 5;i++){
   (function(i2){
         result.push(function(){return i2});
   }(i)); //复制当前的i
}

```

### 14.6 进阶阅读

- [Variable declarations: three rules you can break](http://www.2ality.com/2012/11/var-statement-rules.html)
- [JavaScript quirk 6: the scope of variables](http://www.2ality.com/2013/05/quirk-variable-scope.html)
- [JavaScript quirk 7: inadvertent sharing of variables via closures](http://www.2ality.com/2013/05/quirk-closures.html)

## 15 对象和继承

就像js里面所有的值一样，对象也有属性，实际上你可以认为对象就是一系列属性的集合，每个属性都是 一个键值对。键是字符串类型的，值是任意的js值类型。到这，我们就可以认为所有属性的键都是标识符， 因为这些键只有通过点运算符可以处理。在这个小节中，你可以学到一个额外的方法来访问以任意字符串作为 键的属性。

### 15.1 单个对象

在js中，你可以直接通过对象字面值来创建一个对象：

```
var jane = {
   name: 'jane',
   deacribe: function (){
       'use strict';
       return 'Person named'+this.name;
   }
};

```

上面这个对象有两个属性:name 和 deacribe,你可以读写这两个属性：

```
jane.name //'jane'
jane.name = 'John'
jane.newProperty = 'abc' //创建新的属性

```

函数值类型的属性就像deacribe称之为方法，使用this指代调用这个方法的属性。

```
jane.deacribe() //'Peroson named John'
jane.name = 'Jane'
jane.deacribe() //Person named Jane

```

in运算符用来检验属性是否存在：

```
'newProperty' in jane //true

'foo' in jane  //false

```

如果你想取得的一个属性不存在，就会得到一个undefined的返回至，前面检测属性是否存在的过程也可以使用以下的方法：

```
jane.newProperty !== undefined //true
jane.foo !== undefined   //false

```

这个delete运算符可以三处属性：

```
delete jane.newProperty  //true
'newProperty' in jane   //false

```

### 15.2 任意的属性键

属性的键可以是任意的字符串。另外，我们可以发现在取一个属性的时候，这个键经常是跟在一个 点运算符的后面。一般来说，如果这个键是标识符你就可以这么用。如果你想使用其他的的字符串作为 键，你可以使用引号将他们引起来，然后通过方括号去访问他们：

```
var obj = {'noe',123};
obj['noe'] //123
obj['noe'] = 456

```

在方括号内也允许你拼接键：

```
var x = 'name';
jane[x] //'jane'
jane['na'+'me'] //'jane'

```

### 15.3 提取方法

如果你要提取一个方法，那么这个方法将会失去与这个对象之间的联系，就不再是这个 对象的一个方法，在严格模式下，这个this的值就会使undefined：

```
var func = jane.deacribe;
func()   //TypeError: Cannot read property 'name' of undefined

```

这个问题可以由bind()函数来解决：

```
var func2 = jane.deacribe.bind(jane);
func2() //'Person named Jane'

```

### 15.4 方法内部的方法

每个函数都有一个特别的变量this，当你想在一个方法里面再插入一个方法的时候就不是很方便，因为 你不能使用这个方法的this变量。看下面的例子：

```
var jane = {
    name: 'Jane',
    friends:['Tarzan','Cheeta'],
    logHiToFriends:function(){
       'use strict';
       this.friends.forEach(function(friend){
           consloe.log(this.name+' says hi to '+friend);
       });
    }
}
jane.logHiToFriends() //TypeError: Cannot read property 'name' of undefined

```

下面有两种方法来解决这个问题：

```
 //1、使用不同的变量来存储这个this：
 logHiToFriends: function () {
    'use strict';
    var that = this;
    this.friends.forEach(function (friend) {
        console.log(that.name+' says hi to '+friend);
    });
}
//2、forEach有第二个参数允许你传入一个this：
logHiToFriends: function () {
    'use strict';
    this.friends.forEach(function (friend) {
        console.log(this.name+' says hi to '+friend);
    }, this);
}

```

在js中，函数表达式经常用来作为方法调用的参数，你得小心这个this的使用在方法调用的时候：

### 15.5 构造函数：对象的工厂

到现在为止，你可能认为js对象就是一些键值对的集合。然而，js也支持面向对象的一个特性：继承。 这个小节不打算完整的介绍js的继承机制，但是会简单介绍一下整个模式。 在js中，方法还扮演着第三种角色：构造函数，对象的工厂。这个角色是通过new运算符来实现的。 构造函数是模拟其他语言实现的。按照惯例，构造函数都得以大写字母开头：

```
function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.ptototype.dist = function(){
   return Math.sqrt(this.x*this.x+this.y*this.y);
};

```

构造函数有两个部分，第一是可以通过Point建立实例数据。第二是Point.prototype属性。 第一部分的数据是每个对象专有的，第二个是所有对象分享的。 我们可以通过new运算符来构造新的对象：

```
var p  = new Point(3,5);
p.x //3
p.dist // 5.830951894845301

```

p是Point的一个实例：

```
p instanceof Point //true
typeof p //'object'

```

### 15.6 进阶阅读

- [The pitfalls of using objects as maps in JavaScript](http://www.2ality.com/2012/01/objects-as-maps.html)
- [JavaScript inheritance by example](http://www.2ality.com/2012/01/js-inheritance-by-example.html)
- [Object properties in JavaScript](http://www.2ality.com/2012/10/javascript-properties.html)
- [Private data for objects in JavaScript](http://www.2ality.com/2012/03/private-data.html)

## 16 数组

数组是一系列的的可以通过从0开始的数字下标访问的的序列。

### 16.1 数组字面值

很容易通过数组字面值来建立数组：

```
var arr = ['a','b','c'];

```

上面的数组有三个元素，你可以通过数字下标来访问它们：

```
arr[0] //'a'
arr[0] = 'x'
arr  //['x','b','c']

```

length属性可以告诉我们数组有多少个元素：

```
arr.length //3

```

但是length也可以用来删除最后面一个元素：

```
arr.length = 2;
arr  //['x','b']

```

数组中同样也有 in操作符：

```
 1 in arr // does arr have an element at index 1?
//true
 5 in arr // does arr have an element at index 5?
//false

```

### 16.2 数组方法

数组有很多的方法：

```
var arr = [ 'a', 'b', 'c' ];
arr.slice(1, 2)  // copy elements ['b']
arr.slice(1)  //[ 'b', 'c' ]
arr.push('x')  // append an element 4
arr   //[ 'a', 'b', 'c', 'x' ]
arr.pop()  // remove last element 'x'
arr  //[ 'a', 'b', 'c' ]
arr.shift()  // remove first element 'a'
arr //[ 'b', 'c' ]
arr.unshift('x')  // prepend an element 3
arr  //    [ 'x', 'b', 'c' ]
arr.indexOf('b')  // find the index of an element 1
arr.indexOf('y') // -1
arr.join('-')  // all elements in a single string  'x-b-c'
arr.join('') //'xbc'
arr.join() //'x,b,c'

```

### 16.3 数组的迭代

有很多种方法可以用来迭代数组元素，最重要的两种方法是forEach和map. forEach迭代数组的每一个元素，并且将当前元素和下标传入到方法中：

```
  [ 'a', 'b', 'c' ].forEach(
     function (elem, index) {  // (*)
         console.log(index + '. ' + elem);
     });
/*
 0. a
 1. b
 2. c
*/

```

需要注意的是，里面的那个方法的参数是可以忽略的，也可以只有一个参数。 map会返回一个新的数组，通过一个非那根发来访问每一个元素：

```
[1,2,3].map(function (x) { return x*x }) //[ 1, 4, 9 ]

```

### 16.4 进阶阅读

- [Arrays in JavaScript](http://www.2ality.com/2012/12/arrays.html)
- [JavaScript quirk 8: array-like objects](http://www.2ality.com/2013/05/quirk-array-like-objects.html)

## 17 正则表达式

js已经内置了对正则表达式的支持。

```
/^abc$/
/[A-Za-z0-9]+/

```

### 17.1 test()方法用来检查是否匹配正则表达式：

```
/^a+b+$/.test('aaab')// true
/^a+b+$/.test('aaa') //false

```

### 17.2 exec()匹配检查并且返回匹配的组：

```
/a(b+)a/.exec('_abbba_aba_')  //[ 'abbba', 'bbb' ]

```

### 17.3 replace() 搜索和替换

```
'<a> <bbb>'.replace(/<(.*?)>/g, '[$1]') //'[a] [bbb]'

```

replace方法的第一个参数必须有/g标志的正则表达式，否则只有第一个地方会被替换。

### 17.4 进阶阅读

- [JavaScript: an overview of the regular expression API](http://www.2ality.com/2011/04/javascript-overview-of-regular.html)
- [JavaScript Regular Expression Enlightenment](http://tech.pro/tutorial/1214/javascript-regular-expression-enlightenment)

## 18 Math

Math是一个处理数学问题的对象：

```
Math.abs(-2)
//2

Math.pow(3, 2)  // 32
//9

Math.max(2, -1, 5)
//5

Math.round(1.9)
//2

Math.cos(Math.PI)  // pre-defined constant for π
//-1

```

## 19 其他的标准库

- Date:一个处理时间的构造函数。
- JSON:一个转换，声称JSON数据的对象
- console.*:一系列的浏览器端的方法，有些也可以工作在Node.js上。

## 20 接下来学什么

在你学完这些基础之后，你可以去学习一在每节后面的进阶阅读，另外，我推荐以下的资料：

- Style guides: [guide to style guides](http://www.2ality.com/2013/07/meta-style-guide.html)
- [Underscore.js](http://underscorejs.org/)
- [JSbooks – free JavaScript books](http://jsbooks.revolunet.com/)
- [Frontend rescue: how to keep up to date on frontend technologies](http://uptodate.frontendrescue.org/)