## 走进JavaScript——类型

ECMAScript语言类型对应于使用ECMAScript语言的ECMAScript程序员直接操作的值。ECMAScript语言类型有以下几种Undefined，Null，Boolean，String，Symbol，Number和Object。ECMAScript语言值是以ECMAScript语言类型为特征的值。

如果你奇怪为什么这里没有写Function类型，并且把Null也当做一种类型，建议你看一下hax在知乎上的一个回答[JavaScript 里 Function 也算一种基本类型？](https://www.zhihu.com/question/24804474)

简单说：按照规范，typeof只是一个运算符，其返回值并不能作为JS类型系统的依据。

#### typeof null == ‘object’ ？

摘录在网上看到的一段话：

> 我听到很多次人们声称`typeof null =='object''是某种意图，表示'null'应该是一个“空对象引用”值，他们进一步使用当前的“任何对象价值”的措辞来支持这种说法。我相信这是非常不准确的，至少就JS今天而言，正如Brendan Eich自己所说的那样，'typeof null =='object'只是一个错误，而不是一个有意的功能或者如何使用它的信号。

MDN上这样说：

> 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是0。由于 `null` 代表的是空指针(大多数平台下值为0x00)，因此，`null`的类型标签也成为了0，`typeof null`就错误的返回了"`object"`

关于null == ‘object’的更多信息，你可以去看看[The history of “typeof null”](http://2ality.com/2013/10/typeof-null.html)这篇文章。译文 [typeof null的前世今生](http://www.cnblogs.com/xiaoheimiaoer/p/4572558.html)

#### Symbol类型？

恩，它是ES6新增的啦，主要用来解决命名冲突，如果你感兴趣可以看一下下面这篇文章。

[JS的第七种基本类型Symbols](http://www.csdn.net/article/2015-07-09/2825172-es6-in-depth-symbols)

#### 用 instanceof 判断对象类型？

用instanceof来判断对象类型多少有些不合适，因为instanceof是用来判断某个对象的原型链是否存在于某个构造函数的prototype上的，因原型链这一层关系导致部分情况下用instanceof来判断对象类型就变得不是那么准确了，比如判断数组的类型。

![](http://images2015.cnblogs.com/blog/857662/201705/857662-20170505233346351-418798319.png)


导致这个原因是因为所有对象都继承至Object.prototype，当然，通过Object.create(null)方式创建对象，原型是不会指向Object.prototype的。

这里推荐一篇关于instanceof的文章[JavaScript instanceof 运算符深入剖析](https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/)

#### 通过constructor属性来判断对象类型是个好方法？

MDN上是这样说的：

> 返回一个指向创建了该对象原型的函数引用。需要注意的是，该属性的值是那个函数本身，而不是一个包含函数名称的字符串。对于原始值（如1，`true` 或 "`test`"），该属性为只读。

将这句话翻译成代码就是这样：

```javascript
function fn(){}
new fn().constructor //等于fn.prototype.constructor
```

而这个fn.prototype.constructor就是指向fn本身，因而有些人就想着通过constructor来判断某个对象的类型，如下图

![](http://images2015.cnblogs.com/blog/857662/201705/857662-20170505233359351-1071254117.png)


看起来通过constructor来判断对象类型是个不错的方法，更重要的是还能判断自定义对象类型。

虽然说通过constructor来判断对象类型是一个方案，但这种方法并不是总正确的，主要还是因为这个constructor指向的是构造函数prototype.constructor属性，而这个值我们是可以手动更改的，如下面这样：

```javascript
function fn(){}
fn.prototype = new Object();
new fn().constructor == fn //false
new fn().constructor == Object //true
```

我们手动将fn.prototype指向一个新对象，它的执行结果如下：

```javascript
fn.prototype = {}.__proto__.prototype.constructor // Object
```

如果你实在是想用constructor来判断对象类型，那么在像上面那种情况时，你可以这样去做：

```javascript
function fn(){}
fn.prototype = new Object();
fn.prototype.constructor = fn;
```

#### 借用toString方法判断对象类型

![img](http://images2015.cnblogs.com/blog/857662/201705/857662-20170506131130789-223078303.png)

我们来看一下规范是怎么定义这个toString方法的

​										ToString转换

| 输入类型      | 结果                                       |
| --------- | ---------------------------------------- |
| Undefined | "undefined"                              |
| Null      | "null"                                   |
| Boolean   | 如果参数是 true，那么结果为 "true"。如果参数是 false，那么结果为 "false"。 |
| Number    | 结果等于输入的参数（不转换）。                          |
| String    | 参见下文的文法和注释。                              |
| Object    | 应用下列步骤：调用 `ToPrimitive`( 输入参数 , 暗示 字符串类型)。调用 ToString(Result(1))。返回 Result(2)。 |

话说规范写的有些苦涩哈，我们还是看一下MDN上怎么说的吧

> 每个对象都有一个 toString() 方法，当对象被表示为文本值时或者当以期望字符串的方式引用对象时，该方法被自动调用。默认情况下，toString() 方法被每个继承自`Object`的对象继承。如果此方法在自定义对象中未被覆盖，`toString()` 返回 "[object *type*]",其中type是对象类型。

也就是说当我们调用Object中的toString方法时，它会返回"[object *type*]"这么个东西，但问题是像Number、Boolean、String类型的值它们都是有自己的toString方法的，因此我们必须借用Object中的toString方法，也就是用call、apply或bind方法。

#### undefined和null的那点事

MDN对null的解释是：

> null是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript [原始值](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) 之一。

再来看看undefined

> `undefined`是全局对象的一个属性。也就是说，它是全局作用域的一个变量。`undefined`的最初值就是原始数据类型`undefined`。
>
> 一个没有被赋值的变量是undefined类型。一个方法或者是语句如果在执行期间没有变量被赋值也会返回undefined，一个函数如果没有[`返回`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return)值，就会返回一个undefined值。

undefined和null的不同点

> null是一个字面量（而不是全局对象的一个属性，[`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) 是）。在 APIs 中，`null` 常被放在期望一个对象，但是不引用任何对象的参数位置。当检测 null 或 undefined 时，注意[相等（==）与全等（===）两个操作符的区别](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) （前者会执行类型转换）。

在使用上还有一个区别就是，我们可以将一个对象赋值为null，从而告诉垃圾回收器这个对象可以回收了，那么为什么不将对象赋值为undefined呢？我觉得undefined本身就是一个值，而null才是真的没有，如果你对此不太理解，可以看一下下面这个链接 [w3c上说的“可以通过将变量的值设置为 null 来清空变量”中的清理变量有什么特别意思吗？](http://bbs.csdn.net/topics/391923830?page=1)

在aimingoo的一篇文章中他是这样说的：[无废话JavaScript（上）](http://blog.csdn.net/aimingoo/article/details/3022379)

> hax:
>
> 大哥你好像漏了null。。。
>
> aimingoo:
>
> null是Object，所以不必单独提出来讲。我记得我曾经问到过你关于null和undefined的问题，你说在邮件列表中对这个问题讨论得很多，但无有答案。其实我后来想明白了，JS中有两套类型体系，各有一个“无”的概值。基本的6种类型中，undefined表示无；对象系统中，null表示无。
>
> 例如，DOM是基于对象系统的，所以适宜于用null来填写attribute中的无值；而var声明的无值变量，由于是基于基本类型系统，所以适宜于用undefined。
>
> 当然，也可以直接说js内部以及语言级别或引擎级别用undefined，而js外部或扩展用null。这个与上面大概相同，但思考角度有异。

##### undefined == null ？

主要还是因为隐式转换导致的。

null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

#### 推荐阅读

[undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

[探索JavaScript中Null和Undefined的深渊](http://yanhaijing.com/javascript/2014/01/05/exploring-the-abyss-of-null-and-undefined-in-javascript/)

##### 巧用typeof判断一个未定义的变量，不报错

我们知道如果使用一个未定义的变量是会报错的，但是用typeof判断一个未定义的变量是不会报错的，我觉得这也合理，因为typeof只是用来判断，而不是去操作。

完...