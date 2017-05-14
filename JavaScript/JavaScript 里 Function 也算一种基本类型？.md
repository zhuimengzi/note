### JavaScript 里 Function 也算一种基本类型？

今天在图书馆看到周爱民老师那本绿皮书，他里面给 js 六类数据类型定义的是把 Function 也单独算一种数据类型，而把 Null 给归到 Object 类型里去？
在我的学习过程中一直认为的是 js 数据类型分为简单的Undefined 、Null、 Boolean、 Number 、String 和复杂的 Object 六类。我还是第一次看到那种分类的方法，于是我也查到了他的那篇博客 [再谈JavaScript的数据类型问题**](https://link.zhihu.com/?target=http%3A//blog.csdn.net/aimingoo/article/details/6634977) ，但是我还是不能理解。Function 它是一种引用类型，和其他的Arry等引用类型一样都是属于 Object 这个复杂类型里的。而不能因为它是 js 里的“第一公民”以及 typeof 返回 function 就单独算一种基本数据类型的吧？也不能因为 Null type 返回 object 就归到Object里去吧。 js 高级程序里也解释了为什么Null typeof 返回的是 object。有的地方还没弄懂，希望各位前辈多多开导。

爱民是按照他的理解来讲解，而不是按照spec来照本宣科的，况且他写绿皮书时ES5/ES6还没有出来，而ES5之前的ES规范其实都写得比较烂。

你也发现他是以typeof运算符的返回值作为“基础类型”。这是站在语言使用者的角度来揣摩语言的内在逻辑。所以他讲的并不符合spec的定义，但这确实是一种角度。

1. Undefined 类型；
2. Null 类型；
3. Boolean 类型；
4. String 类型；
5. Symbol 类型（此为ES6规范所新增）；
6. Number 类型；
7. Object 类型。

且按照spec，typeof只是一个运算符，其返回值并不能作为JS类型系统的依据。

我先说下如何理解typeof的返回值。

现在比较普遍的认知是，typeof null返回“object”是一个历史错误（JS的发明者Brendan Eich自己也是这样说的），只是因为要保持语言的兼容性而维持至今。从ES5制定开始就有动议将typeof null改为返回“null”（如启动node加上“--harmony_typeof”参数，即是如此），但是当前ES6标准草案仍然维持了原样。

然而，typeof null返回“object”，按照爱民的意见，也可在某种程度上理解为null实为object类型的一个特殊值。在诸如Java这样的语言中，一个变量若是primitive类型，均不可赋以null值，而若是 object，则均可赋以null值。因为在理解上来说，null实际是引用（reference）的特殊值（表示没有指向任何实际对象）。

尽管我曾向爱民指出过，BE从来没有证实过这样的看法，不过我也认为这种理解并不是没有道理，比如考虑JavaScript在null之外又加入undefined的独一无二的设计（至少我不知道有其他语言有类似的做法）——这样，一个要用于primitive的变量的初始值就是undefined而不是null；而不返回值的函数实质上是返回undefined而不是null。也就是说，借助undefined/null的分化，我们可以更好的将类java语言下的程序对应到JS中——可以分清楚primitive和object，可以分清楚void function和返回object（或 null）的function。

当然JS语言并非强类型语言，变量本身也并不与类型绑定，因此实质上并无此种限制。所以上述看法只是对语言的感悟，而无法成为确定的结论。不过从DOM接口和WebIDL规范上可以看出这个区分，很多人写程序的时候也自觉不自觉的遵循这种区分。

如果抛开typeof null的谜题，那么剩下唯一不对应的地方，就是function被单列出来。我个人的看法，这是因为function确实很特殊，特殊到从实际应用场景考虑确实应该将其单独列出来。spec没有将其单列，是因为它同样有所有其他object的特性——而按照我的看法（爱民应该也是这样的看法），这仅仅是因为当初JS是如此设计和实现的。如果当初function不是作为一种特殊object来实现的（这完全是可能的，而且其实这样做更清晰），spec自然应该将其单列为类型之一。

其实从实际区分来说，Array/Argument/String对象以及现在新增的强类型Array还有Proxy也都很特殊。Array/String等的特殊点在于其下标访问特性和length属性，是与一般对象完全不同的；Proxy的特殊性就更不用说了。在ES6 spec中它们被称为exotic对象（与ordinary对象相对）。之所以function对象在spec中并不是exotic对象，是因为它只是比普通对象多了[[call]]，其他方面与普通对象是一样的，而exotic对象则除了可能多一些特别的内部属性外，还override了普通对象的内部方法。但是你觉得是Array和普通对象的差异大，还是Function和普通对象的差异大呢？我想大多数人会认同function更为特殊。举这个例子是说明，spec如何划分概念，主要是依据spec的逻辑，而不是其他标准。所以从spec的逻辑看，类型系统是这样划分的，也是合理的。

但是从学习和掌握语言的角度来看，就是另外一回事情了。比如很多年前我就花了很多时间“研究”在JS中到底function和object哪个更本质——这个伪问题到现在还是会困扰很多JS初学者（[http://www.zhihu.com/search?q=object+function&type=question](http://www.zhihu.com/search?q=object+function&type=question)）。

不仅是概念理解上变复杂，让function具有object的所有特性这种设计从我现在的观点看其实是个错误，具体这里就不展开了。

爱民在当年是少数具有非常深的其他语言背景（主要是Delphi）的JavaScript语言研究者，所以他是从更一般的角度来解释JavaScript，而不是完全按照spec来叙述。这有好处，也有坏处。坏处就是会造成如题主这样已经不是纯粹小白而是进阶者的疑惑。