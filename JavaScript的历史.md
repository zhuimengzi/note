## JavaScript的历史

## 第一章

“JavaScript的历史” 是从今天开始的新的文章系列，并会在DailyJS上每周一持续更新（注：该文章写于2010年）。我将会谈谈JavaScript的历史，从90年代的早期起，到JavaScript 2的发展和放弃，一直到现在的情况。每一篇文章的底部都会包含相关的链接，这样你就能在重大事件和概念上获得更多的细节。

### Brendan Eich

JavaScript的诞生，源于动态页面的需求。对于其起源，这个名字给了我们一丝线索—-很明显，Java在其历史中有扮演了一定的作用。JavaScript实际上是Sun公司的商标—-网景公司在其授权情况下使用了这个名字。然而，Sun公司没有创建JavaScript。

Brendan Eich在90年代为网景公司创建了JavaScript语言，并将其包含在1995年发布的Netscape 2浏览器的早期版本中。Brendan Eich的职业生涯开始于 Silicon Graphics公司，主要从事操作系统和网络方面的编码工作，最终结束于网景公司。

在发展历程中，JavaScript语言曾被叫做“Mocha” 和“LiveScript”。尽管人们都喜欢指出它不是由Sun公司开发的，且一点也不像Java语言，但Brendan却渴望将其当作Java语言的小兄弟：

我们将其当作Java语言的小兄弟来看，就好像当时微软公司的编程语言家族里Visual Basic作为C++的互补语言一样。

### Ecma International

在网景公司将JavaScript语言提交给Ecma International组织之后，ECMA-262规范的工作于1996年11月开始。该标准的第一版于1997年6月被Ecma组织采纳。（注：ECMA是“European Computer Manufactures Association”的缩写，中文称欧洲计算机制造联合会）

而JavaScript 1.1已经在Netscape 3.0浏览器里使用了（从1996年8月起），到了1997年6月JavaScript 1.2随着Netscape 4.0浏览器发布。

### 微软

与此同时，微软公司正在开发IE浏览器，与网景公司进行竞争。1996年8月，基于网景公司的JavaScript开发的JScript随着IE 3.0发布。微软公司将其命名为JScript，是为了避免商标的争论。

### JavaScript的实现

JScript是JavaScript的一种方言。而被Mozilla称为JavaScript的语言依然被一些人认为是JavaScript的实际上的标准，而Ecma组织采纳的标准仅仅定义了JavaScript语言的实现应该要做的。出现这种情况的原因是Brendan Eich目前是Mozilla公司的CTO。而且实际上，尽管JavaScript有着一个国际上公认的标准，但是其涉及到的“政治”远比你想象中的要集中。

第二章

在第二章中，我将讨论“浏览器战争”，还有JavaScript特性的发展和DOM。

参考：

JavaScript creator ponders past, future — great interview JScript on Wikipedia JavaScript on Wikipedia 原文地址：[http://dailyjs.com/2010/05/24/history-of-javascript-1/](http://dailyjs.com/2010/05/24/history-of-javascript-1/)

## JavaScript的历史：第二章

这篇文章是“JavaScript的历史”系列文章的第二章。上个星期，我们谈了Brendan Eich，他为网景公司创建了JavaScript语言。随后谈到，ECMA-262规范的第一版在1997年被接纳为正式标准。

### ECMAScript

一旦ECMAScript标准化，JavaScript就变成了ECMAScript的网景公司版本的方言。其他流行的方言有ActionScript和JScript（在IE浏览器中使用）。如果一种方言满足该规范，那么它就可以称作“与ECMAScript兼容”，方言通常包含专有的扩展，以适用于该实现所处的上下文需要。

### 浏览器战争

正如我上周提及到的，为应对于网景公司的JavaScript，微软引进了JScript。微软使JScript很大程度地兼容JavaScript，这使JavaScript得到了普及。

现在听起来会很可笑，但一些不被人所喜欢使用的专有特性，比如blink标签，就是在浏览器战争中被引进来。更严重的一些特性也被引进来，但是当时这些特性的用途并不总是很明显。

XMLHttpRequest就是一个活生生的例子。尽管ActiveX在使用，但是在XMLHttpRequest这个概念背后的创建者就是微软。这个特性在1999年就已经随着IE 5.0浏览器出现了。而直到2006年，W3C才发布XMLHttpRequest的工作草案。

另外一个由微软引进来的专有特性是innerHTML属性。出于其流行和社区的请求，网景公司在2000年5月添加了对这个属性的支持。

### DOM（文档对象模型）

随着专有的标签和属性的出现，如innerHTML，浏览器战争的中心是DOM的开发就不足为奇了。没有清晰的API来操作标签元素的话，JavaScript在客户端编码的能力就大大减弱了。在标准化之前，微软和网景都曾犯过一些错误。

网景公司在Netscape 2浏览器的JavaScript中实现了0 级DOM。甚至连现代的浏览器都支持这个0级的DOM，尽管实用性不大。而微软在IE 3.0浏览器中支持这一特性。

如果你是从90年代开始学习网络编程，你将可能会很熟悉0级 DOM的使用方法：

//返回页面上所有的表单

document.forms[]

//返回第一张图片

document.images[0]

//改变属性

document.images[0].src = ‘/images/rollover.gif’

万维网协会（W3C）成立于1994年，它已经帮助JavaScript标准化为ECMAScript。1998年末，1级 DOM的推荐标准公布。IE 5.0浏览器部分支持这个API。直到2000年，2级 DOM发布，我们终于有了getElementById方法和事件模型。

从某种程度来说，这已经太迟了。微软有着其自己的事件模型，这个事件模型到现在仍然在使用。如果你已经关注过我们的“Let’s Make A Framework”系列文章，你应该看过微软的事件模型的代码示例。

### 反垄断

与此同时，自IE 4起，IE浏览器被集成到Windows操作系统中。就是这个时间点，网景公司的市场份额开始丧失。最终表明，微软的这个策略是潜在地反竞争的，这引发了1998年的反垄断案件。

这个案件并没有帮助网景公司—-IE 6成为了最流行的浏览器。这可以说是互联网上快速创新时代的结束。直到Web 2.0概念的兴起，IE才开始大幅地失去市场份额。

第三章

下个星期我将继续这个系列，探讨Web 2.0革命前的那几年发生的事。

参考：

DOM Level 0 United States v. Microsoft Using innerHTML in Netscape 6 原文地址：[http://dailyjs.com/2010/05/31/history-of-javascript-2/](http://dailyjs.com/2010/05/31/history-of-javascript-2/)

## JavaScript的历史：第三章

这篇文章是“JavaScript的历史”系列文章的第三章。上星期我们回顾了DOM的发展，还有浏览器战争，这使得微软在反垄断案中败诉，同时自IE 6的发布以来，其市场份额也达到了最高点。

### Rhino解释器

SpiderMonkey解释器是Brendan Eich在网景公司时用C语言编写的。这是第一个JavaScript解释器，目前仍然被火狐浏览器、Adobe的产品和很多其他的应用程序使用。

Rhino解释器一开始是作为计划中的Java版本的网景浏览器的组件出现的，最初由Norris Boyd创建。虽然Java版本的网景浏览器从来没有出现过，但是Rhino解释器却诞生了。Sun公司将其授权，并最终在1998年由Mozilla发布。不久之后，Rhino作为一个开源项目被公布。

Rhino解释器最初是将JavaScript编译成字节码，但是编译花费的时间太长，所以添加了解释模式。

### ECMA-262第三版

1999年末，ECMA-262第三版发布。这一版本添加了正则表达式、使用try和catch进行异常处理的支持和其他的改进。今天大多数浏览器支持的依然是第三版的超集。

在这之后，ECMAScript的发展进入了一个怪异的时代。为适应嵌入式设备，发布了一个压缩版的ECMAScript，其出现在HD DVD的规范中。接着还发布了XML版本的ECMAScript–E4X。这个版本添加了原生的XML支持，被认为是另一种很有用的访问DOM接口的方法。

### ECMAScript 4

1999年ECMAScript第三版发布之后，第4版的开发工作启动。在2003年发布了一个过渡的版本时，该项标准的工作也终止了。ActionScript和JScript.NET 实现了这项标准早期的一些特性。

2005年，ES4的开发工作再次启动。工作组打算利用微软和Adobe公司的经验，希望在2008年末完成第4版的开发。

直到2007年10月，打算开发的特性详单已超过两页纸：基于类的面向对象特性、多方法和操作符的重载、可选的类型注解、严格标准模式、产生器，还有更多预计支持的特性。

这时， 在Ajax体验大会上，Douglas Crockford指出了该提案的复杂性。Brendan Eich不以为然—-他已经为这个第4版的开发工作努力了两年。他承认微软的支持并没有起很大的作用。更详细的原因发表在 Brendan’s Roadmap Updates。

### ECMAScript 4 安息吧

这件事代表了ECMAScript 4的一个转折点。2007年末，这场争论越发严重，ES4的开发工作也不能持续下去了。2008年8月，Brendan Eich宣布代号为“Harmony”的项目，目的在于重新团结整个社区去开发一个新的ECMAScirpt标准。ECMAScript 4和JavaScript 2正式“死亡”了。

回想起来，尽管ECMAScript 4标准看起来略显稚嫩，但是很多开发者已经使用它创建了开源的库。甚至一些高级开发人员，如John Resig，已经在博客上谈论这个被废弃的标准了。

这段艰难的时期，证明了JavaScript的优势在于简单性，对于整个开发社区来说，这是很重要的一堂课。

下个星期

下个星期我将会谈一些使Web 2.0革命得以爆发的框架。

参考

Rhino History SpiderMonkey at MDC ECMAScript Edition 4: Brendan Speaks Out ECMAScript Harmony by John Resig 原文地址：[http://dailyjs.com/2010/06/07/history-of-javascript-3/](http://dailyjs.com/2010/06/07/history-of-javascript-3/)

## JavaScript的历史：第四章

这篇文章是“JavaScipt的历史”系列文章的第四章。上星期我们回顾了Rhino解释器的开发和JavaScript 2的垮台。这个星期我将深入讨论Ajax技术和JavaScript框架。

### Ajax

正如我们已说过的，微软在很早之前就已经引入了XMLHttpRequest对象。Mozilla公司很快就跟进，在Gecko排版引擎了支持这一特性，但直到大约2002年，其功能才算完善。其他浏览器最终都实现了类似的功能，他们都是在W3C将该特性标准化之前完成的。

与此同时， Jesse James Garrett在2005年2月发布了一篇文章，标题为“Ajax：一种开发网络应用的新方法”。在Adaptive Path网站称作“Ajax”的技术中，Garrett引入了XMLHttpRequest对象作为主要的组件。

这种新方法的重要性迅速变得很明显。人们从这篇文章学到主要是异步客户端代码的强大作用。很快，Ajax这个术语，就代表了XMLHttpRequest这个更难理解的术语的同义词。

我还是喜欢Adaptive Path网站里对Ajax的初始定义，我认为它有助于理解这两个术语之间的差异。但是在一些流行的JavaScript函数库里还是将Ajax和XMLHttpRequest混淆了。

### XMLHttpRequest对象

W3C协会在2006年4月公布了关于XMLHttpRequest对象的工作草案。这个草案的最新版本是2009年11月公布的第19版，请查看www.w3.org/TR/XMLHttpRequest/。

尽管该规范的第一版草案是在2006年公布的，但是Web 2.0革命在2005年就开始了。

### Web 2.0的兴起

网络泡沫破灭之后（注：网络泡沫指的是2000年左右互联网领域的过热投资），对于web应用程序的兴趣不断衰退。那时候我刚好毕业，所以对于在那个时期如何生存我有着亲身经验。谢天谢地，Garrett在2005年发表的文章和诸如谷歌地图这样的流行网站，激发了一种新的Web应用的出现。

我记得同事告诉过我Ajax技术是很危险的，因为客户端HTTP请求的数量会对服务器产生很大的影响。而实际上这个问题并不常见，一些旨在处理web 2.0技术（如XMLHttpRequest对象）的JavaScript库开始出现。

我使用的第一个函数库是Sam Stephenson开发的Prototype。它使用了很多Ruby语言的约定，且由于Rails的关系，这个库在Ruby程序员中很流行。它使得XMLHttpRequest对象用起来很简单，并且解决了很多使用JavaScript开发过程遇到的跨浏览器的问题。

在2005年出现的其他函数库有：

Dojo Toolit MochiKit Scriptaculous 基于Prototype开发的Scriptaculous提供了丰富的UI特性。

### 新类型的API

诸如Prototype的函数库受到了其他编程语言的影响。它们的内部结构和API类似于传统的面向对象的类。当这些函数库在为支持下一代流行的UI插件而斗争时，其他开发者却在考虑在浏览器中是否有另一种更加自然方法来使用JavaScript。

John Resig就是这些“勇敢的人”之一。在“JavaScript中的选择器”里，他谈到了一个叫做Behaviour的函数库，并考虑了一些方法将JavaScript代码跟CSS选择器联系起来。

通过使JavaScript用起来更加自然，他创建了jQuery库的基础部分。一年之后，jQuery 1.0发布。

### 历史教训

我非常尊重Sam Stephenson，Thomas Fuchs 和 John Resig。他们使自身的项目沿着不同的方向发展，使得我们这些一线的开发者在很多方面的开发都更加容易。不管怎样，我们从这段时期可以认识到，发挥你的编程语言的优势最终会获得成功的。

正如kangax在今年（注：2010年）指出的，Prototype库对DOM的扩展的做法有着很大的问题。这样看起来Prototype 2的工作方式可能会更像jQuery。不受Ruby、Python或Java的影响，Resig坚持自己的立场并寻找如何编写“自然的”JavaScript代码的方法，而这最终取得了成功。

参考

Ajax: A New Approach to Web Applications by Jesse James Garrett XMLHttpRequest at MDC www.w3.org/TR/XMLHttpRequest/ Ajax Summit: Sam Stephenson, Prototype 原文地址：[http://dailyjs.com/2010/06/14/history-of-javascript/](http://dailyjs.com/2010/06/14/history-of-javascript/)

## JavaScript的历史：第五章

这篇文章是“JavaScript的历史”系列文章的第五章。上星期我们回顾了Ajax、XMLHttpRequest的发展和Web 2.0的兴起。

### 原型和对象

对于“为什么JavaScript是基于原型的”这个问题，我还不能找出一个具体的答案。如果你回忆该系列文章的第一章，你可能会记得引用自Brendan Eich的这段话：

我们将其当作Java语言的小兄弟来看，就好像当时微软公司的编程语言家族里Visual Basic作为C++的互补语言一样。 很明显JavaScript的创造者希望JavaScript比Java更加简单，我们大多数人都知道Java的对象模型是很庞大的。相反，JavaScript的对象模型就非常简单。高级的面向对象特性可以使用JavaScript的核心特性来构建：原型对象和闭包。

### 面向类编程

我记得听过Dave Thomas 的一个谈话，他为面向对象编程里类的过度使用而叹息。面向对象编程就是关于对象或者类的吗？大多数人学到的就是面向类的。

当我们谈及到基于原型编程时，这就是我们需要记住的。对于那些学习经典的面向对象编程的人来说，要分别这两者的区别并不总是那么容易。

### 基于原型编程的历史

原型的概念来自于将Self这种编程语言开发成面向对象的语言这个想法中。Self语言在1990年首次公开。1991年，该语言的开发者加入Sun公司，这或许说明了与JavaScript之间的联系。

Self语言挑战着这样的一个概念：类与对象是不同的。与JavaScript很像，在Self语言里，对象是可以用于创建副本的，而不是从模板实例化对象。用于创建副本的对象被称为原型。

你可以在 Language Reference学习Self语言。

在Self语言和广泛应用的JavaScript语言之间，其他有趣的基于原型的编程语言也被开发出来。Lua语言创建于1993年，目前广泛应用于游戏行业的脚本编程任务中。REBOL语言诞生于1997年，它使用make函数来构建和返回对象。

我用得相当多的一种基于原型的编程语音是 io，它创建于2002年。这款语言简洁且容易学习，我认为它应该能够吸引Lisp或JavaScript爱好者。

### 基于原型的编程语言的趋势

如果你仔细查看过流行的基于原型的编程语言，你将会注意一些共性：

- 简单的语法
- 动态
- 都被Scheme语言激发
- 小型且效率高的虚拟机

### 结论

基于原型的编程语言，如JavaScript和Lua，都已经找到了它们各自的利基市场，而且相比以前，越来越多的开发者精通这种编程风格。考虑到在虚拟机设计和实现方面的大量创新，这些编程语言将会继续流行下去。

原文地址：[http://dailyjs.com/2010/06/22/history-of-javascript/](http://dailyjs.com/2010/06/22/history-of-javascript/)

## JavaScript的历史：第六章

这篇文章是“JavaScript的历史”系列文章的第六章。上星期我探讨了基于原型编程的历史。不久前我写了很多关于JavaScript动画的文章，所以这个星期我会谈论到JavaScript动画的历史。

### 动态HTML时代

网页设计中的动画包括旋转效果、动态GIF图、图片映射和其他已经可以用简单的CSS能够实现的效果。这些技术统称为DHTML（动态HTML），人们编写了大量关于这个主题的书籍。现在我已经几乎不再听到DHTML这个术语，看起来后网络泡沫时代的设计师和开发者都悄然向前发展了。

当Netscape 4浏览器面世时，人们开始使用JavaScript和layer标签来实现一些难以置信的高级效果。我在博客上写过很多前沿的JavaScript技术—-HTML5游戏、动画、应用—-但是这些在大概10年之前就已经全部实现了，虽然是使用不太灵活的标签和传统的技术。

1997年网景公司发明了“图层”的概念，然而万维网协会却致力于开发出div标签，所以毫无疑问，“图层”这一概念很快就被废弃了。“图层”这一概念曾经被大肆宣传并且确实有足够让人兴奋的地方，但是它们最大的缺点是，它们是Netscape 4浏览器专有的。对一个图层进行定位和修改其大小是很简单的，对它进行移动也是一样。

第四代浏览器遗留下的另一个产物是 revealTrans（滤镜）。现在我们仍然在IE浏览器中使用filter:来实现诸如透明度等效果，但是revealTrans能够对标签元素或者整个页面创建转换的特效。

浏览器专用的API和这些特效的使用不当给DHTML带来了坏名声。web标准的出现，鼓励设计师尝试新的技术。

### 标准化运动

跨浏览器和语义化的XHTML成为下一个大事件。尽管IE 6浏览器当前的市场份额很大，它使得设计师头疼不已，但是具有创新意识的人们仍然在寻找着如何在不违反标准的情况下建立更好的网站的方法。

使用动画和特效的网站看起来开始过时了。诸如 A List Apart的在线社区在宣传着与标准兼容的好处。

此时，我感觉动态HTML和JavaScript动画可能是已过去的东西了，但接着 37signals公司的Matthew Linderman发表了“Web界面设计技巧：黄色渐淡技术”。37signals公司的出名在于其简洁、专注web设计和推动基于标准的设计方法。“黄色渐淡技术”在web应用的页面上使用了一小段JavaScript代码来中暂时性地高亮做过修改的地方。如果浏览器不能显示出来也没有关系，它仅仅在可能的情况下增强了用户体验。

一家擅长设计的公司使用被认为是已过时的DHTML技术，意味着人们开始重新认真考虑使用动画这一特效。而且 37signals公司与script.aculo.us之间的关系表明JavaScript动画被新一代的开发者所青睐。尽管出现了其他动画框架，但是script.aculo.us可能是最广为人知名的，并在JavaScript动画复兴起了关键的作用。

### 解决方案

早在90年代，网景公司和微软在为专利技术互相斗争的时候，我们今天的动画工具的核心就已经出现了。实际上，setTimeout方法是在Netscape 2.0浏览器中随着JavaScript 1.0引进的。

网景公司甚至做了一个叫做Sliding Tower的例子，它使用setTimeout方法来移动图片。讽刺的是，当浏览器在为那些华而不实的新技术斗争时，我们真正需要的是只是陈旧的setTimeout方法和可使用的DOM。

由于90年代那时计算机和浏览器的性能问题，最初setTimeout方法被认为执行得太慢了。但是现在网络上大多数动画都是在使用这类函数。

使用setTimeout或者setInterval方法来创建动画，需要通过DOM来对样式进行操作。这通常包括控制透明度或者位置属性。现代的浏览器甚至能够使用GPU来渲染特效：webkit.org 网站上 3D Transforms有一些例子。

随着能将SVG转换成IE浏览器的VML的JavaScript库出现，使用canvas标签的动画矢量图形变得流行起来了。

### CSS动画

苹果公司与Flash的“战争”，表明苹果公司是CSS动画的大力支持者。CSS Animations Module Level 3的工作草案有着三个编辑者，都是来自苹果公司的。Webkit浏览器都已经支持了CSS动画。

纯粹主义者辩称JavaScript应该用于处理“行为”，而CSS应该用于“样式”。在Sarari浏览器中的CSS动画这篇文章中，Jonathan Snook不赞成CSS动画的使用。

看起来未来将会由移动设备来驱动的，这可能就是为什么苹果公司宁愿使用CSS来提供高度优化的效果，而不是JavaScript。我敢肯定10年之内，我们要么会嘲笑苹果公司、Adobe公司、CSS3，要么会嘲笑所有这些公司和技术。

### 参考

Articles on DHTML and layers About the layer tag from Netscape Smooth animation using DHTML (from 1999) Image Animation w/Speed Control (2000) Introduction to Filters and Transitions DHTML Utopia: Modern Web Design Using JavaScript & DOM Cross-Browser Animation by Dave Thau (2002) Better Living Through XHTML by Jeffrey Zeldman window.setTimeout at MDC 3D Transforms CSS Animations in Safari 原文地址：[http://dailyjs.com/2010/06/28/history-of-javascript/](http://dailyjs.com/2010/06/28/history-of-javascript/)

## JavaScript的历史：第七章

这篇文章是“JavaScript的历史”系列文章的第七章。上星期我谈到了JavaScript动画的历史。这个星期我将谈谈ECMAScript 5标准。

### JavaScript 2

如果你回顾第三章的话，你应该会看到当整个社区在争论JavaScript未来的发展方向时，JavaScript 2就已经“死亡”了。ECMA-262标准第五版在2009年批准通过。最初的新闻稿写道：

作为之前宣布的ECMAScript Harmony项目的一部分，未来的ECMAScript版本的开发工作将会继续下去。

### ECMAScript 第五版

ECMAScript 第五版没有JavaScript 2那么激进，它是一只很不一样的“野兽”。而这个版本主要的变化相对较为保守：

- 数组方法： indexOf, lastIndexOf, forEach, filter, every, map, some
- String.trim：将字符串里所有的空白字符删除
- 原生支持JSON
- Date: now, toISOString, parse

在语言本身也有一些变化：

- Function.prototype.bind
- 更新过的对象模型
- 严格模式
- 常量
- Getters and setters
- 更新过的对象模型

对象获得了许多新的方法： Object.create, Object.getPrototypeOf, Object.keys, Object.getOwnPropertyNames, object descriptors, Object.seal, Object.freeze。

我不想将所有这些新的对象方法都写出来，但主要的有：我们现在能够释放对象，并且能安全地迭代那些允许迭代的对象方法。

在下面的文章里都有谈到，IE 9里脚本编写能力的加强：ECMAScript 5的支持和Object.getPrototypeOf。

这些方法赋予API作者对对象拥有更多的控制权。

### 严格模式

使用use strict;会使解释器运行在严格模式下。这是一种很有用的方法，来保证代码只用了符合ECMAScript标准的特性，而不是某一种“方言”：

ECMAScript标准的“严格”版本通常指的是该语言的严格模式。ECMAScript标准的严格模式的选择和严格模式下语法和语义的使用，需要在单独的ECMAScript代码单元中明确标示。 常量

实际上，在ECMAScript 5标准中并不包含常量，const被标记为将来使用的保留字。部分解释器已经支持它了，尽管我不会使用这种将来会被使用的关键字。

### Getter和Setter方法

关键字get和set用于描述getter方法和setter方法：

user = { first_name: ‘Alex’, last_name: ‘Young’,

get full_name() { return this.first_name + ‘ ‘ + this.last_name; },

set full_name(name) { name = name.split(‘ ‘); this.first_name = name[0]; this.last_name = name[1]; } };

user.full_name // returns: Alex Young user.full_name = ‘Alex Smith’ user.full_name // returns: Alex Smith 你已经可以在Rhino解释器和火狐浏览器中使用这个特性了，还可以用在V8解释器和其他更多的解释器中。

这个特性已经使用得很普遍了，所以熟悉这种语法是很有用的。

### 未来

对开发者来说，ECMAScript 5标准添加了足够的“语法糖”来使得在可预见的未来里，开发工作都会蛮轻松的。它还解决了在对象模型领域里我们需要自己编码的一些问题。Array和String对象里也有了一些改进，这之前我们必须要自己来解决的。更重要的是，这些改进和use strict的使用使得不同的JavaScript解释器之间的分歧有所减少，这意味着未来的浏览器（和我们的代码）将有希望更加地一致。

### 参考

ECMAScript 5th Edition: tc39-2009-043.pdf Enhanced Scripting in IE9: ECMAScript 5 Support and More ECMAScript 5: The Definitive Slides Object.getPrototypeOf 原文地址：[http://dailyjs.com/2010/07/05/history-of-javascript/](http://dailyjs.com/2010/07/05/history-of-javascript/)

## JavaScript的历史：第八章

这篇文章是“JavaScript的历史”系列文章的第八章。上星期我谈及了ECMAScript 5标准的特性。这些都是核心的语言特性，其中部分特性已经得到浏览器和解释器的支持。还有个问题，就是我们希望现在或者在不久的将来看到哪些Web API。

尽管这些API里很多都是由万维网协会发布的，但是WHATWG社区在HTML 5标准的发展中起了很大的作用。

### WHATWG工作组

WHATWG工作组成立于2004年，成员来自于苹果公司、Mozilla基金会和Opera软件公司。该工作组的成立，一定程度上是为了反对当时万维网协会将HTML向XHTML开发。

要推荐HTML 5在生产环境中使用，这可能尚需时日，但是带着这样的想法，我们已经可以在较新的浏览器中访问部分API了。

### Web Workers

Web Workers技术背后的想法是允许后台进程与主页面进程并行运行。已经创建了一些运行在现代浏览器上的演示（在这篇文章之前我们已经讨论了该API）：

Firefox 3.5: Web Workers in action Computing with JavaScript Web Workers Prime number demo

### File API

File API允许通过编程对文件进行操作。通过允许我们处理多个文件、二进制数据、文件元数据和错误处理，该API解决了当前浏览器在文件处理方面的限制。

详看HTML5 File API。

### Canvas

Canvas使得很容易通过编程画图。这是另外一个W3C规范，目前出于工作草案阶段。

### 其他的API

- Drag and Drop

- Offline Web Applications through cache manifests

- Geolocation API

- Web Storage

- Messaging

  ### 总结

WHATWG在Web的未来发展方向上发挥了重要的作用。如果你是一个客户端开发者，那么“类客户端”的特性将会很有用。如果你是一个设计师，这意味着你将有更丰富的工具来创建更可靠且直观的用户体验。

没有专用API的情况下，很多UI问题都可以克服 —- 比如对“拖放”特性的良好支持，虽然我们已经使用这个特性很多年了。尽管有很多好的技术可以解决“同源策略”的问题，但是更好的消息机制将得到良好支持，尤其是对于实时应用来说是很重要的。

将File API和更现代的消息机制、离线功能结合在一起，将会使网络应用突然之间变得更像桌面应用程序，之前是没有过这样的情况的（如果没有Java或者Flash的话）。最后的问题就是单纯使用HTML和JavaScript来操作二进制数据了，而一些浏览器已经支持这个特性。

如果你想了解更多HTML 5的API的话，使用WHATWG specs，会有很多关于浏览器支持、测试的信息，还有链接到相关的演示页面。