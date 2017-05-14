### [JavaScript历史](http://hax.iteye.com/blog/190436)

貌似（根据一位精神导师的说法）JavaScript最终流行了。

对我来说，从小时候起就是一个书呆子，当然这是一场诅咒与玩笑。

> Brendan Eich在Netscape上说服了他的尖头老板，我们应该有个自己的脚本语言，并且是一种新的语言。

我不知道Doug为什么要编故事，他并没在Netscape呆过，在Ajax会议的主题演讲中，他已经听到了我关于JavaScript诞生的回忆，他是为了在Web开发者中推广C#么？ 

谁知道呢，不过本周是我参与创建mozilla的第十个年头，我想聊一点历史。 

我是以在浏览器中搞Scheme的名头被招募到Netscape的，至少客户工程管理包括Tom Paquin，Michael Toy和Rick Schell以及叫做Marc Andreessen的那些家伙，认为Netscape应该以HTML格式在源代码中嵌入编程语言，所以并非是我说服的“尖头老板”。 

javascript是否是Scheme，那就仁者见仁,智者见智了，不过我加入Netscape却是因为Scheme的。（Brendan Eich的主要方向和兴趣是函数式编程）

当时需要一个有说服力的例子（也就是一个demo），我完成了它，而它随即变成了事实。 

1995年Sun公司将Oak语言改名为Java，Netscape决定与Sun公司结成联盟，希望将其包含在浏览器中。

因此，Netscape的大辩论成为“为什么要用两种语言？为什么不只是Java？“答案是需要两种语言来服务于编程，在编程领域有两类不相干的受众用户，他们最需要专门的编程语言，一类是组件作者，他们用C ++或Java，另外一类是那些编写“scripters”的作者，他们可能是业余或专业的，那么谁将来编写直接嵌入HTML的代码呢。

是否可以使用现有的语言，而不是去发明新的语言，这不是我决定的，因为整个管理层希望这种语言必须看起来像Java，但要比Java简单，这个决策导致排除了Perl，Python和Tcl以及Scheme。

我不骄傲，但我很欣慰将Scheme中的function作为第一等公民以及借鉴Self将原型作为继承机制，但受到Java的影响，数据分成基本类型（primitive）和对象类型（object）两种，比如字符串和字符串对象，以及引入了Y2K问题，这真是不幸啊。

回到1995年春天，记得在那段时间里我遇到了比尔·乔伊，并与他讨论了垃圾收集，从一开始Bill就将这个脚本语言作为简化版的Java来设计，类似于VB在Microsoft平台中与C ++的关系。

Kipp Hickman和我在1995年4、5月期间一直在研究Java，Kipp已经开始编写自己的JVM，Kipp和我写了第一版NSPR，作为他的可移植性JVM底层，在5月初至5月中旬我开始制作“摩卡车”并将其用于相同的目的。

Bill相信我们删除Kipp的JVM，因为它将减少Sun在JVM中的兼容性Bug。在这一点上，“摩卡”已经通过快速原型设计和嵌入到Netscape Navigator 2.0中，NetView Navigator 2.0处于其前alpha开发阶段。

其余的是反常的，无情的历史， JS在客户端上打败了Java，只有Flash才能支持JS，ActionScript的后代。

回到JavaScrip，我们知道某些Ajax图书馆很受欢迎， JavaScript受欢迎吗很难说，一些Ajax开发人员自称喜欢它，还有许多人诅咒它，包括我。我觉得它就像是C语言和Self语言的一夜产物，不免想到约翰逊博士的一句话：“它的优秀之处并非原创，它的原创之处并不优秀。”