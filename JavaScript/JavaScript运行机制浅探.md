### JavaScript运行机制浅探

从一个简单的问题谈起：

<script type="text/javascript">

​    alert(i); // ?

​    var i = 1;

</script>

输出结果是undefined, 这种现象被称成“预解析”：JavaScript引擎会优先解析var变量和function定义。在预解析完成后，才会执行代码。如果一个文档流中包含多个script代码段（用script标签分隔的js代码或引入的js文件），运行顺序是：

step1. 读入第一个代码段

step2. 做语法分析，有错则报语法错误（比如括号不匹配等），并跳转到step5

step3. 对var变量和function定义做“预解析”（永远不会报错的，因为只解析正确的声明）

step4. 执行代码段，有错则报错（比如变量未定义）

step5. 如果还有下一个代码段，则读入下一个代码段，重复step2

step6. 结束

上面的分析，已经能解释很多问题了，但老觉得欠缺点什么。比如step3里，“预解析”究竟是怎么回事？还有step4里，看下面的例子：

<script type="text/javascript">

​    alert(i); // error: i is not defined.

​    i = 1;

</script>

为什么第一句会导致错误？JavaScript中，变量不是可以不定义吗？

编译过程

时间如白马过隙，书柜旁翻开恍如隔世般的《编译原理》，熟悉而又陌生的空白处有着这样的笔记：

> 对于传统编译型语言来说，编译步骤分为：词法分析、语法分析、语义检查、代码优化和字节生成。
> 但对于解释型语言来说，通过词法分析和语法分析得到语法树后，就可以开始解释执行了。

简单地说，词法分析是将字符流(char stream)转换为记号流(token stream), 比如将c = a - b;转换为：

NAME "c"

EQUALS

NAME "a"

MINUS

NAME "b"

SEMICOLON

上面只是示例，更进一步的了解请查看 

Lexical Analysis

.

《JavaScript权威指南》的第2章，讲的就是词法结构（Lexical Structure），ECMA-262 中也有描述。词法结构是一门语言的基础，很容易掌握。至于词法分析的实现那是另一个研究领域，在此不探究。

可以拿自然语言来类比，词法分析是一对一的硬性翻译，比如一段英文，逐词翻译成中文，得到的是一堆记号流，还很难理解。进一步的翻译，就需要语法分析了，下图是一个条件语句的语法树：

构造语法树的时候，如果发现无法构造，比如if(a { i = 2; }, 就会报语法错误，并结束整个代码块的解析，这就是本文开头部分的step2.

通过语法分析，构造出语法树后，翻译出来的句子可能还会有模糊不清的地方，接下来还需要进一步的语义检查。对于传统强类型语言来说，语义检查的主要部分是类型检查，比如函数的实参和形参类型是否匹配。对于弱类型语言来说，这一步可能没有（精力有限，没时间去看JS的引擎实现，不敢确定JS引擎中是否有语义检查这一步）。

通过上面的分析可以看出，对于JavaScript引擎来说，肯定有词法分析和语法分析，之后可能还有语义检查、代码优化等步骤，等这些编译步骤完成之后（任何语言都有编译过程，只是解释型语言没有编译成二进制代码），才会开始执行代码。

上面的编译过程，还是无法更深入的解释文章开头部分的“预解析”，我们还得仔细探究下JavaScript代码的执行过程。

执行过程

周爱民在《JavaScript语言精髓与编程实践》的第二部分，对此有非常仔细的分析。下面是我的一些领悟：

通过编译，JavaScript代码已经翻译成了语法树，然后会立刻按照语法树执行。

进一步的执行过程，需要理解JavaScript的作用域机制，JavaScript采用的是词法作用域（lexcicalscope）。通俗地讲，就是JavaScript变量的作用域是在定义时决定而不是执行时决定，也就是说词法作用域取决于源码，编译器通过静态分析就能确定，因此词法作用域也叫做静态作用域（staticscope）。但需要注意，with和eval的语义无法仅通过静态技术实现，实际上，只能说JS的作用域机制非常接近lexical scope.

JS引擎在执行每个函数实例时，都会创建一个执行环境（execution context）。executioncontext中包含一个调用对象（call object）,调用对象是一个scriptObject结构，用来保存内部变量表varDecls、内嵌函数表funDecls、父级引用列表upvalue等语法分析结构（注意：varDecls和funDecls等信息是在语法分析阶段就已经得到，并保存在语法树中。函数实例执行时，会将这些信息从语法树复制到scriptObject上）。scriptObject是与函数相关的一套静态系统，与函数实例的生命周期保持一致。

lexical scope是JS的作用域机制，还需要理解它的实现方法，这就是作用域链（scope chain）。scopechain是一个namelookup机制，首先在当前执行环境的scriptObject中寻找，没找到，则顺着upvalue到父级scriptObject中寻找，一直lookup到全局调用对象（global object）。

当一个函数实例执行时，会创建或关联到一个闭包（closure）。scriptObject用来静态保存与函数相关的变量表，closure则在执行期动态保存这些变量表及其运行值。closure的生命周期有可能比函数实例长。函数实例在活动引用为空后会自动销毁，closure则要等要数据引用为空后，由JS引擎回收（有些情况下不会自动回收，就导致了内存泄漏）。

别被上面的一堆名词吓住，一旦理解了执行环境、调用对象、闭包、词法作用域、作用域链这些概念，JS语言的很多现象都能迎刃而解。

小结

至此，对于文章开头部分的疑问，可以解释得很清楚了：

step3中所谓的“预解析”，其实是在step2的语法分析阶段完成，并存储在语法树中。当执行到函数实例时，会将varDelcs和funcDecls从语法树中复制到执行环境的scriptObject上。

step4中，未定义变量意味着在scriptObject的变量表中找不到，JS引擎会沿着scriptObject的upvalue往上寻找，如果都没找到，对于写操作i = 1; 最后就会等价为 window.i = 1; 给window对象新增了一个属性。对于读操作，如果一直追溯到全局执行环境的scriptObject上都找不到，就会产生运行期错误。

理解后，雾散花开，天空一片晴朗。

最后，留个问题给大家：

<script type="text/javascript">

​    var arg = 1;

​    function foo(arg) {

​        alert(arg);

​        var arg = 2;

​    }

​    foo(3);

</script>

请问alert的输出是什么？

参考资料

- 周爱民《JavaScript语言精髓与编程实践》（推荐仔细阅读第二部分，爱民的书，总是很耐读）
- [实现一个脚本引擎](http://docs.huihoo.com/vm/tut_script/tut_script0.htm)（引擎不是我们想象中的那么深奥）
- [JavaScript Closures](http://jibbering.com/faq/faq_notes/closures.html)（绝对的好文，推荐）
- hax: [简述JavaScript的scope机理](http://hax.javaeye.com/blog/273210)（言简意赅）