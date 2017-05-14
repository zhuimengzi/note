### jquery  vs Prototype

在jQuery爱好者[Wycats](http://www.yehudakatz.com/)的一篇post中，由以下的例证开始了与prototype.js的这场宗教战争。对于任意的一个ＨＴＭＬ节点之后加入一个任意的标记

In Prototype:

> new Insertion.After(’myId’, ‘Arbitrary HTML’);

In jQuery: 

> $(’#myId’).after(’Arbitrary HTML’);

看起来，jQuery的代码确实比prototype.js的代码更“人性化”一些。当然，从可读性来讲，两者的可读性都是非常出色的。这就是我需要学习的地方-良好的代码就是自注释的。

造成代码风格的这种差异，其实是两个framework的开发者不同的代码哲学造成的。对于prototype来说，非常类似Java的处理方式：将一系列的功能封装到一个类之中，比如Math类。而对于jQuery来说，其哲学理念是将所有的HTML节点都视为一个Object,通过调用这个Object上面不同的方法向这个Object发送不同的消息，来让Object自己实现不同的功能，产生不同的表现。

而这篇文章的作者认为jQuery哲学更优秀的地方就在于将一个html node与各种functionality有机的结合在一起，使代码更优雅，而实现这种结合的正式jQuery中的$()函数；请注意，这个$()与prototype.js中的$()有着本质的区别，查看过两个framework的document之后就会发现，jQuery中的$()可以根据复杂的传入参数来返回一个或者一组html node,而这些查询条件是如此的复杂，甚至连css selector与xpath都被纳入了被支持的范围；而prototype.js的$()就显得有些小儿科，它只能返回一个单独的html node。

正式这个$()的不同，prototype.js引入了$$()这样的css selector来 弥补起对html node query的不足，但是似乎效果甚微，因为jQuery的这种将object与functionality粘连的理念深植在framework之中，成为了近乎语法的一部分，而prototype还是脱离不了将html node单独作为一种特别的”材料“来进行操作，从如下的代码就可以看出：

向一组元素加入一个css class(Prototype): 

> $$('.element').each(function(node) {Element.addClassName(node, 'className');}

向一组元素加入一个css class(jQuery): 

> $('.element').addClass('className');

从上面的例子就可以看出来，是代码的哲学左右的框架的使用规则，prototype只能笨拙的使用为array attch的一个.each方法来进行元素的迭代，从而完成为每个元素加入一个css class的工作，而jQuery处理的似乎就漂亮的多，也似乎更有人情味一些，这就叫做优雅。

当然，所谓的优雅，其实不一定就更被推崇，因为这属于技术上的一种极端。两者的performance我并没有比较过，但是估计差别不会很大，或者说这种用优雅换来的性能差别并没有达到需要考虑的数量级。

Wycats的声音还没落，

EncyteMeida

的

另一篇Post

就开始应战了，大声呼吁Wycats在misleading各位Developer,并且将Wycats数出来 的jQuery的优点都数落了一番，还像模像样的给出了例证：

> 谁说prototype.js没有这样的语法?
> Element.addMethods({      insertionBefore: function(element, content) { new Insertion.Before(element, content); },      insertionAfter:  function(element, content) { new Insertion.After(element, content); },      insertionTop:    function(element, content) { new Insertion.Top(element, content);  },      insertionBottom: function(element, content) { new Insertion.Bottom(element, content); }    });    $("item-1").insertionBefore("<li>Sweet</li>");

> 谁说prototype.js没有auto looping?
> $$('span').invoke("addClassName", 'omg');

甚至还数落了jQuery的.js文件短小精悍是使用字母表中的’a,b,c’等字母作为变量命名换来的等等……

真有意思，技术界整天都在展开宗教战争，就像当初Java Vs .Net一样，其实根本就不存在哪个更好哪个更强的说法，只是我们都在欣赏一次次技术大牛们的战争中慢慢成长起来，学会了更多的东西而已，希望技术界天天打仗！

两个都是好样的，附上两个framework的cheat sheet,经常看看