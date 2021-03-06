## GOF设计模式

> 设计模式捕获了随时间进化与发展的问题的求解方法，因此它们并不是人们从一开始就采用的设计方案。

设计模式的难点就在于它不仅仅考虑现在，还要考虑未来，初学者之所以难以理解设计模式就在于，用设计模式思想所做出来的，在短时间内是看不出有什么好处的，而且常常更加复杂。”它们并不是人们从一开始就采用的设计方案“随着时间的流逝，我们也在不断的改进，不断的踩坑，从这些坑中获取经验，使得最终能设计一个还算不错的方案，为什么是还不错，而不是肯定？没有一成不变的道理，设计模式不过就是按着老路走罢了，设计模式不是银弹。

> 设计面向对象软件比较困难，而设计可复用的面向对象软件就更加困难。

能把眼前的代码写好已经很难了，而要想设计可复用的代码，不仅要考虑当前的，更要考虑未来的，所以这使得设计一个可复用的程序，难上加难。

> 你必须找到相关的对象，以适当的粒度将它们归类，再定义类的接口和继承层次，建立对象之间的基本关
> 系。

有了归类，就好找它们的共同点呗，找到了共同点，就可以通过继承的方式只写一次呗，这不就是可复用嘛，可这归类可不是一个好干的活，归类还是根据粒度，不能把啥都归到一类，不然关系太乱，写着写着就变了味了，谁都和你有关系，那岂不是谁都可以命令你啊。

> 你的设计应该对手头的问题有针对性，同时对将来的问题和需求也要有足够的通用性。

不是啥都可以用来设计的，如果当前的问题不是一个通用的那又何必设计。有针对性是指你要解决的这个问题是否属于某一类问题，也就是是否是通用问题，如果是那么可以考虑去设计，但必须要考虑将来的变化，不然设计出来的，还是一次性用品。

> 你也希望避免重复设计或尽可能少做重复设计。

废话中的废话，再将这句话做解释就更是废话中的废话。

> 有经验的面向对象设计者会告诉你，要一下子就得到复用性和灵活性好的设计，即使不是不可能的至少也是非常困难的。一个设计在最终完成之前常要被复用好几次，而且每一次都有所修改。

想做到可复用性的难点在于，很难完整的考虑清楚未来会发生什么变化，如果真是那么容易想清楚，网站就不会有那么多次改版了，就·算考虑清楚了，要想实现这个功能也不是那么容易的。每一次都有修改，那是因为没有考虑下一次，把代码写死了，只好重新修改呗。

> 有经验的面向对象设计者的确能做出良好的设计，而新手则面对众多选择无从下手，总
> 是求助于以前使用过的非面向对象技术。新手需要花费较长时间领会良好的面向对象设计是
> 怎么回事。

都说有经验了，自然是踩过坑呗，不想再踩坑只能从失败中寻找答案呗，新手是没有踩过坑，不知坑中是何滋味，顾虑自然就少了，一次性代码多好，想那么多干啥，直到一天，哎吖妈呀，这坑的。

> 内行的设计者知道：不是解决任何问题都要从头做起。他们更愿意复用以前使用过的解
> 决方案。当找到一个好的解决方案，他们会一遍又一遍地使用。这些经验是他们成为内行的
> 部分原因。

从头开始意味着你不确定是否有新的坑等你去跳，使用以前写过的代码，自然坑点就少了，因为坑都让你踩光了嘛，看到了吧，那些有经验的就是拿着自己的经验来吓人，经验成败论啊。

> 因此，你会在许多面向对象系统中看到类和相互通信的对象（ c o m m u n i c a t i n go b j e c t）的重复模式。这些模式解决特定的设计问题，使面向对象设计更灵活、优雅，最终复用性更好。

看到了吧，设计模式只是用来解决某个特定的问题，为什么是特定的问题呢，要是通用的那多不好设计啊，管理起来也不便呀。

> 它们帮助设计者将新的设计建立在以往工作的基础上，复用以往成功的设计方案。
> 一个熟悉这些模式的设计者不需要再去发现它们，而能够立即将它们应用于设计问题中。

重复利用啊，原来这设计模式就是copy，copy + copy，只是它这copy带点范，不用你手动去copy，而且还能用在不同情况下。

> 小说家和剧本作家很少从头开始设计剧情。他们总是沿袭一些业已存在的模式，像“悲剧性英雄”模式 (《麦克白》 、 《哈姆雷特》等)或“浪漫小说”模式(存在着无数浪漫小说)。

跟风模式，哈哈哈，既然你们这么喜欢，我跟着写也能成功咯，我又何必去创新呐，创新有风险呐。

> 一旦懂得了模式，许多设计决策自然而然就产生了。

每天9点上班，从家到公司40分钟左右，6点起床？太早，7点起床？早了一点，8点起床？路上堵车怎么办？7点半？ok，搞定，这个设计真好。

> 我们都知道设计经验的重要价值。你曾经多少次有过这种感觉 — 你已经解决过了一个问
> 题但就是不能确切知道是在什么地方或怎么解决的？如果你能记起以前问题的细节和怎么解
> 决它的，你就可以复用以前的经验而不需要重新发现它。

每天6点40起来总是早到，该如何是好，如果每天7点左右再起来，岂不是正好。

> 这本书的目的就是将面向对象软件的设计经验作为设计模式记录下来。每一个设计模式
> 系统地命名、解释和评价了面向对象系统中一个重要的和重复出现的设计。我们的目标是将
> 设计经验以人们能够有效利用的形式记录下来。

系统地命名？不命名，你和其他人怎么交流，喂，那段代码，上次我好像写过。

> 设计模式使人们可以更加简单方便地复用成功的设计和体系结构。

人家告诉你，你按照它的做就好了呗。

> 将已证实的技术表述成设计模式也会使新系统开发者更加容易理解其设计思路。

将已证实的技术？说明此问题遇到过多次呗。

#### 什么是设计模式

每一个模式描述了一个在我们周围不断重复发生的问题，以及该问题的解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复劳动。

一个模式有四个基本要素：

- 模式名称  ：方便交流，记忆
- 问题 ：要解决啥？
- 解决方案 ：怎么解决的
- 效果 ：权衡利弊

设计模式确定了所包含的类和实例，它们的角色、协作方式以及职责分配。每一个设计模式都集中于一个特定的面向对象设计问题或设计要点，描述了什么时候使用它，在另一些设计约束条件下是否还能使用，以及使用的效果和如何取舍。

> 虽然设计模式描述的是面向对象设计，但它们都基于实际的解决方案。

作者可能是想说，设计模式不仅仅适用于面向对象设计。

> 程序设计语言的选择非常重要，它将影响人们理解问题的出发点。我们的设计模式采用了Smalltalk 和C + +层的语言特性，这个选择实际上决定了哪些机制可以方便地实现，而哪些则不能。若我们采用过程式语言，可能就要包括诸如“继承” 、 “封装”和“多态”的设计模式。相应地，一些特殊的面向对象语言可以直接支持我们的某些模式，例如： C L O S支持多方法（m u l t i - m e t h o d）概念，这就减少了Vi s i t o r模式的必要性。事实上，S m a l l t a l k和C + +已有足够的差别来说明对某些模式一种语言比另一种语言表述起来更容易一些。

语言很重要！！！

> 当我评估一个面向对象系统的质量时，所使用的方法之一就是要判断系统的设计者是否强调了对象之间的公共协同关系。在系统开发阶段强调这种机制的优势在于，它能使所生成的系统体系结构更加精巧、简洁和易于理解，其程度远远超过了未使用模式的体系结构。

#### MVC

> MVC通过建立一个“订购 /通知”协议来分离视图和模型。视图必须保证它的显示正确地反映了模型的状态。一旦模型的数据发生变化，模型将通知有关的视图，每个视图相应地得到刷新自己的机会。这种方法可以让你为一个模型提供不同的多个视图表现形式，也能够为一个模型创建新的视图而无须重写模型。

这样当然能为一个模型提供多个视图啦，因为模型不属于某一个具体的视图，这样谁都可以去使用它了。~~个人觉得MVC只适合用在一对多的情况下，一个模型对多个视图。不然这种分离没有啥意义，反而使模型和视图太松散了。~~

> 将对象分离，使得一个对象的改变能够影响另一些对象，而这个对象并不需要知道那些被影响的对象的细节。这个更一般的设计被描述成 Observer模式。

将对象分离就是将视图、模型、控制器分离，使模型不依赖于视图和控制器，但这样的话就会出现一个问题，当模型状态更新时，如何通知视图触发更新？如果直接通过模型通知视图，那么又会导致依赖性，为了解决这个问题，引入了Observer模式，当模型状态更新时，由观察器通知其他对象更新状态。各个视图实现Observer接口，并向模型注册。模型将跟踪由订阅更改的所有观察器组成的列表，当模型发生改变时，模型将会遍历所有已注册的观察器，并将更改通知它们，此方法通常称为"发布-订阅"。

代码1：

```html
<input type="text" id="input">
<script>
  	// 观察器
    var observer = {
        listen:[],
        addListen(item){
            this.listen.push(item);
        },
        triggerListen(data){
            this.listen.forEach(function(item){
                item.upView(data);
            });
        }
    };
   // 模型
    var model = {
        data:"",
        upData(data){
            this.data = data;
            this.triggerListen(this.data);
        }
    };
    model.__proto__ = observer;
   // 视图1
    var view = {
        upView(data){
            console.log("view1:",data);
        }
    };
   // 视图2
    var view2 = {
        upView(data){
            console.log("view2:",data);
        }
    };
   // 控制器
    var controller = {
        event(){
            document.getElementById("input").addEventListener("input",function(){
                model.upData(this.value);
            });
        }
    };
    controller.event();
    model.addListen(view);
    model.addListen(view2);
</script>
```

模型不直接通知视图，而是通知观察器，由观察器来通知。

之前的做法可能会是下面这样：

```javascript
// 模型
    var model = {
        data:"",
        upData(data){
            this.data = data;
            view.upView(this.data);
            view.upView2(this.data);
        }
    };
   // 视图1
    var view = {
        upView(data){
            console.log("view1:",data);
        }
    };
   // 视图2
    var view2 = {
        upView(data){
            console.log("view2:",data);
        }
    };
   // 控制器
    var controller = {
        event(){
            document.getElementById("input").addEventListener("input",function(){
                model.upData(this.value);
            });
        }
    };
    controller.event();
```

由于模型和视图直接接触，导致一旦再添加视图或删除，都需要去操作模型内部代码，如果代码是自己写还好，如果交由同事，这种写法就不是很好了。以上代码还算好的了，如果将模型和数据混在一起，当新增一个模型时又得重新写一份模型了。

在这几段代码中，我发现控制器的概念就不是那么强烈了，可有可无，因为控制器的作用就是解释用户的鼠标和键盘输入，以通知模型或视图进行相应的更改，而在web浏览器中，我们只需要通知模型，而通知模型web浏览器提供了事件机制。

在代码1中，由于模型继承至观察器，而某些语言如javascript，它就只支持单继承，因此这种做法会导致它无法继承至其他对象，一个可行的解决方案是将观察器写在模型中。

```html
<input type="text" id="input">
<script>
   // 模型
   class Model{
      constructor(){
        var data = "";
        this._listener = [];
        this.setData = function(newData){
          data = newData;
          this.triggerListen(newData);
        };
        this.getData = function(){
          return data;
        };
      }
      addListen(item){
        this._listener.push(item);
      }
      triggerListen(){
        var _this = this;
        this._listener.forEach(function(item){
            item.upView(_this.getData());
        });
      }
   }
   // 视图1
    var view = {
        upView(data){
            console.log("view1:",data);
        }
    };
   // 视图2
    var view2 = {
        upView(data){
            console.log("view2:",data);
        }
    };
    var model = new Model;
    model.addListen(view);
    model.addListen(view2);
    // 不再使用控制器
    document.getElementById("input").addEventListener("input",function(){
        model.setData(this.value);
    });
</script>
```

> 将一些对象划为一组，并将该组对象当作一个对象来使用。这个设计被描述为C o m p o s i t e 模式，该模式允许你创建一个类层次结构，一些子类定义了原子对象（如B u t t o n）而其他类定义了组合对象（ C o m p o s i t e Vi e w ），这些组合对象是由原子对象组合而成的更复杂的对象

从细颗粒到一粒再由粒组合粒成为一个组，由组再组合形成一个对象，如果要使用原子对象，那么得考虑清楚是否有必要，毕竟原子对象太过于原始，要说组合，function就是最好的例子。

> 一个策略是一个表述算法的对象。当你想静态或动态地替换一个算法，或你有很多不同的算法，或算法中包含你想封装的复杂数据结构，这时策略模式是非常有用的。

每个算法都是独立的，使用的时候传递相应的算法。

> M V C 的主要关系还是由 O b s e r v e r 、C o m p o s i t e 和S t r a t e g y 三个设计模式给出的。

[模型-视图-控制器](https://msdn.microsoft.com/zh-cn/library/ff649643.aspx)

[Observer（观察器）](https://msdn.microsoft.com/zh-cn/library/ms978753.aspx)

> 我们怎样描述设计模式呢？图形符号虽然很重要也很有用，却还远远不够，它们只是将设计过程的结果简单记录为类和对象之间的关系。为了达到设计复用，我们必须同时记录设计产生的决定过程、选择过程和权衡过程。具体的例子也是很重要的，它们让你看到实际的设计。
>
> 我们将用统一的格式描述设计模式，每一个模式根据以下的模板被分成若干部分。模板具有统一的信息描述结构，有助于你更容易地学习、比较和使用设计模式。

设计模式是干嘛的，它的意图是什么，什么情况下使用，其优缺点。

> 模式名简洁地描述了模式的本质。一个好的名字非常重要，因为它将成为你的设计词汇表中的一部分。

见名如见人

> 我们根据两条准则 (表1 - 1 )对模式进行分类。第一是目的准则，即模式是用来完成什么工作的。模式依据其目的可分为创建型 （C r e a t i o n a l ）、结构型 ( S t r u c t u r a l ) 、或 行为型( B e h a v i o r a l ) 三种。创建型模式与对象的创建有关；结构型模式处理类或对象的组合；行为型模式对类或对象怎样交互和怎样分配职责进行描述。

对设计模式进行分类以便于我们对各族相关的模式进行引用，分类有助于更快地学习目录中的模式，且对发现新的模式也有指导作用。

> 第二是 范围 准则，指定模式主要是用于类还是用于对象。类模式处理类和子类之间的关系，这些关系通过继承建立，是静态的，在编译时刻便确定下来了。对象模式处理对象间的关系，这些关系在运行时刻是可以变化的，更具动态性。从某种意义上来说，几乎所有模式都使用继承机制，所以“类模式”只指那些集中于处理类间关系的模式，而大部分模式都属于对象模式的范畴。

说明有些模式在使用类还是对象上是有区别的。

> 抽象类(abstract class)的主要目的是为它的子类定义公共接口。一个抽象类将把它的部分或全部操作的实现延迟到子类中，因此，一个抽象类不能被实例化。在抽象类中定义却没有实现的操作被称为抽象操作 (abstract operation)。非抽象类称为具体类(concrete class)。
>
> 子类能够改进和重新定义它们父类的操作。更具体地说，类能够重定义 ( o v e r r i d e ) 父类定义的操作，重定义使得子类能接管父类对请求的处理操作。类继承允许你只需简单的扩展其他类就可以定义新类，从而可以很容易地定义具有相近功能的对象族。

统一接口

> 继承和组合各有优缺点。类继承是在编译时刻静态定义的，且可直接使用，因为程序设计语言直接支持类继承。类继承可以较方便地改变被复用的实现。当一个子类重定义一些而不是全部操作时，它也能影响它所继承的操作，只要在这些操作中调用了被重定义的操作。但是类继承也有一些不足之处。首先，因为继承在编译时刻就定义了，所以无法在运行时刻改变从父类继承的实现。更糟的是，父类通常至少定义了部分子类的具体表示。因为继承对子类揭示了其父类的实现细节，所以继承常被认为“破坏了封装性” [ S n y 8 6 ]。子类中的实现与它的父类有如此紧密的依赖关系，以至于父类实现中的任何变化必然会导致子类发生变化。
>
> 当你需要复用子类时，实现上的依赖性就会产生一些问题。如果继承下来的实现不适合解决新的问题，则父类必须重写或被其他更适合的类替换。这种依赖关系限制了灵活性并最终限制了复用性。一个可用的解决方法就是只继承抽象类，因为抽象类通常提供较少的实现。
>
> 对象组合是通过获得对其他对象的引用而在运行时刻动态定义的。组合要求对象遵守彼此的接口约定，进而要求更仔细地定义接口，而这些接口并不妨碍你将一个对象和其他对象一起使用。这还会产生良好的结果：因为对象只能通过接口访问，所以我们并不破坏封装性；只要类型一致，运行时刻还可以用一个对象来替代另一个对象；更进一步，因为对象的实现是基于接口写的，所以实现上存在较少的依赖关系。
>
> 对象组合对系统设计还有另一个作用，即优先使用对象组合有助于你保持每个类被封装，并被集中在单个任务上。这样类和类继承层次会保持较小规模，并且不太可能增长为不可控制的庞然大物。另一方面，基于对象组合的设计会有更多的对象 (而有较少的类)，且系统的行为将依赖于对象间的关系而不是被定义在某个类中。这导出了我们的面向对象设计的第二个原则：优先使用对象组合，而不是类继承。理想情况下，你不应为获得复用而去创建新的构件。你应该能够只使用对象组合技术，通过组装已有的构件就能获得你需要的功能。但是事实很少如此，因为可用构件的集合实际上并不足够丰富。使用继承的复用使得创建新的构件要比组装旧的构件来得容易。这样，继承和对象组合常一起使用。
>
> 然而，我们的经验表明：设计者往往过度使用了继承这种复用技术。但依赖于对象组合技术的设计却有更好的复用性 (或更简单)。你将会看到设计模式中一再使用对象组合技术。

待注释

> 面向对象程序由对象组成，对象包括数据和对数据进行操作的过程，过程通常称为方法或操作。对象在收到客户的请求(或消息)后，执行相应的操作。

每个对象应该有哪些方法和属性以及状态。

> 对象在大小和数目上变化极大。它们能表示下自硬件或上自整个应用的任何事物。那么
> 我们怎样决定一个对象应该是什么呢？

粒度太大又不适合重用，粒度太小耦合度又太大，所以如何控制对象的粒度就很重要了。

> 类型(type) 是用来标识特定接口的一个名字。如果一个对象接受“ Wi n d o w”接口所定义的所有操作请求，那么我们就说该对象具有“ Wi n d o w”类型。一个对象可以有许多类型，并且不同的对象可以共享同一个类型。对象接口的某部分可以用某个类型来刻画，而其他部分则可用其他类型刻画。两个类型相同的对象只需要共享它们的部分接口。接口可以包含其他接口作为子集。当一个类型的接口包含另一个类型的接口时，我们就说它是另一个类型的子类型( s u b t y p e )，另一个类型称之为它的超类型( s u p e r t y p e )。我们常说子类型继承了它的超类型的接口。

如果一个对象继承自另一个对象，我们可以说这个对象具有那个对象的类型，比如Javascript中的原型继承。  ~~这也就是为什么我们通过instanceof判断一个函数是否是Object也等于true的原因了。~~

> 在面向对象系统中，接口是基本的组成部分。对象只有通过它们的接口才能与外部交流，如果不通过对象的接口就无法知道对象的任何事情，也无法请求对象做任何事情。对象接口与其功能实现是分离的，不同对象可以对请求做不同的实现，也就是说，两个有相同接口的对象可以有完全不同的实现。

比如javascript中的toString方法在不同类型中都有不同的实现方式。

> 当给对象发送请求时，所引起的具体操作既与请求本身有关又与接受对象有关。支持相同请求的不同对象可能对请求激发的操作有不同的实现。发送给对象的请求和它的相应操作在运行时刻的连接就称之为动态绑定(dynamic binding)。

多态

> 动态绑定是指发送的请求直到运行时刻才受你的具体的实现的约束。因而，在知道任何有正确接口的对象都将接受此请求时，你可以写一个一般的程序，它期待着那些具有该特定接口的对象。进一步讲，动态绑定允许你在运行时刻彼此替换有相同接口的对象。这种可替换性就称为多态( p o l y m o r p h i s m )，它是面向对象系统中的核心概念之一。多态允许客户对象仅要求其他对象支持特定接口，除此之外对其假设几近于无。多态简化了客户的定义，使得对象间彼此独立，并可以在运行时刻动态改变它们相互的关系。

如果没有多态，就大大减小了可复用性，子类可以继承自父类，但如果子类不能覆盖父类的方法，那么实用性就不是那么大了。

> 针对接口编程，而不是针对实现编程。不将变量声明为某个特定的具体类的实例对象，而是让它遵从抽象类所定义的接口。

- 客户无须知道他们使用对象的特定类型，只须对象有客户所期望的接口。
- 客户无须知道他们使用的对象是用什么类来实现的，他们只须知道定义接口的抽象类。这将极大地减少子系统实现之间的相互依赖关系，也产生了可复用的面向对象设计

####  继承和组合

> 继承和组合各有优缺点。类继承是在编译时刻静态定义的，且可直接使用，因为程序设计语言直接支持类继承。类继承可以较方便地改变被复用的实现。当一个子类重定义一些而不是全部操作时，它也能影响它所继承的操作，只要在这些操作中调用了被重定义的操作。但是类继承也有一些不足之处。首先，因为继承在编译时刻就定义了，所以无法在运行时刻改变从父类继承的实现。更糟的是，父类通常至少定义了部分子类的具体表示。因为继承对子类揭示了其父类的实现细节，所以继承常被认为“破坏了封装性” [ S n y 8 6 ]。子类中的实现与它的父类有如此紧密的依赖关系，以至于父类实现中的任何变化必然会导致子类发生变化。
>
> 当你需要复用子类时，实现上的依赖性就会产生一些问题。如果继承下来的实现不适合解决新的问题，则父类必须重写或被其他更适合的类替换。这种依赖关系限制了灵活性并最终限制了复用性。一个可用的解决方法就是只继承抽象类，因为抽象类通常提供较少的实现。对象组合是通过获得对其他对象的引用而在运行时刻动态定义的。组合要求对象遵守彼此的接口约定，进而要求更仔细地定义接口，而这些接口并不妨碍你将一个对象和其他对象一起使用。这还会产生良好的结果：因为对象只能通过接口访问，所以我们并不破坏封装性；只要类型一致，运行时刻还可以用一个对象来替代另一个对象；更进一步，因为对象的实现是基于接口写的，所以实现上存在较少的依赖关系。
>
> 对象组合对系统设计还有另一个作用，即优先使用对象组合有助于你保持每个类被封装，并被集中在单个任务上。这样类和类继承层次会保持较小规模，并且不太可能增长为不可控制的庞然大物。另一方面，基于对象组合的设计会有更多的对象 (而有较少的类)，且系统的行为将依赖于对象间的关系而不是被定义在某个类中。

优先使用对象组合，而不是类继承。

#### 委托

> 委托(d e l e g a t i o n)是一种组合方法，它使组合具有与继承同样的复用能力 [ L i e 8 6 , J Z 9 1 ]。在
> 委托方式下，有两个对象参与处理一个请求，接受请求的对象将操作委托给它的代理者
> (d e l e g a t e)。这类似于子类将请求交给它的父类处理。使用继承时，被继承的操作总能引用接
> 受请求的对象，C + +中通过t h i s成员变量，S m a l l t a l k中则通过s e l f。委托方式为了得到同样的
> 效果，接受请求的对象将自己传给被委托者（代理人） ，使被委托的操作可以引用接受请求的
> 对象。

#### 模版

> 另一种功能复用技术(并非严格的面向对象技术 )是参数化类型(parameterized type)，也就是类属( g e n e r i c ) ( A d a、E i ff e l )或模板( t e m p l a t e s ) ( C + + )。它允许你在定义一个类型时并不指定该类型所用到的其他所有类型。未经指定的类型在使用时以参数形式提供。例如，一个列表类能够以它所包含元素的类型来进行参数化。如果你想声明一个 I n t e g e r列表，只需将I n t e g e r类型作为列表参数化类型的参数值；声明一个 S t r i n g列表，只需提供S t r i n g类型作为参数值。语言的实现将会为各种元素类型创建相应的列表类模板的定制版本。

------------------------------------

> 一个面向对象程序运行时刻的结构通常与它的代码结构相差较大。代码结构在编译时刻就被确定下来了，它由继承关系固定的类组成。而程序的运行时刻结构是由快速变化的通信对象网络组成。事实上两个结构是彼此独立的，试图由一个去理解另一个就好像试图从静态的动、植物分类去理解活生生的生态系统的动态性。反之亦然。

类无法知道子类会做什么

> 获得最大限度复用的关键在于对新需求和已有需求发生变化时的预见性，要求你的系统设计要能够相应地改进。
>
> 为了设计适应这种变化、且具有健壮性的系统，你必须考虑系统在它的生命周期内会发生怎样的变化。一个不考虑系统变化的设计在将来就有可能需要重新设计。这些变化可能是类的重新定义和实现，修改客户和重新测试。重新设计会影响软件系统的许多方面，并且未曾料到的变化总是代价巨大的。

##### 导致重新设计的一般原因

- 通过显式地指定一个类来创建对象 在创建对象时指定类名将使你受特定实现的约束而不是特定接口的约束。这会使未来的变化更复杂。要避免这种情况，应该间接地创建对象。
- 对特殊操作的依赖 当你为请求指定一个特殊的操作时，完成该请求的方式就固定下来了。为避免把请求代码写死，你将可以在编译时刻或运行时刻很方便地改变响应请求的方法。
- 对硬件和软件平台的依赖 外部的操作系统接口和应用编程接口 ( A P I )在不同的软硬件平台上是不同的。依赖于特定平台的软件将很难移植到其他平台上，甚至都很难跟上本地平台的更新。所以设计系统时限制其平台相关性就很重要了。
- 对对象表示或实现的依赖 知道对象怎样表示、保存、定位或实现的客户在对象发生变化时可能也需要变化。对客户隐藏这些信息能阻止连锁变化。
- 算法依赖 算法在开发和复用时常常被扩展、优化和替代。依赖于某个特定算法的对象在算法发生变化时不得不变化。因此有可能发生变化的算法应该被孤立起来。
- 紧耦合 紧耦合的类很难独立地被复用，因为它们是互相依赖的。紧耦合产生单块的系统，要改变或删掉一个类，你必须理解和改变其他许多类。这样的系统是一个很难学习、移植和维护的密集体。
- 通过生成子类来扩充功能
- 不能方便地对类进行修改

#### 框架

> 框架规定了你的应用的体系结构。它定义了整体结构，类和对象的分割，各部分的主要责任，类和对象怎么协作，以及控制流程。框架预定义了这些设计参数，以便于应用设计者或实现者能集中精力于应用本身的特定细节。框架记录了其应用领域的共同的设计决策。因而框架更强调设计复用，尽管框架常包括具体的立即可用的子类。

框架即结构，任何对框架设计的实质性修改都会大大降低框架所带来的好处，因为框架对应用的最主要贡献在于它所定义的体系结构。因此设计的框架必须尽可能地灵活、可扩充。



















#### 学完设计模式该干啥？

看看之前的代码，是否都是写死的，能否扩展一下？比如一个电子商务网站，由于起步阶段并没有设置会员制度，而你写的代码也没有去考虑将来是否会添加会员，因此在做一些判断时你都写死了，将来添加会员时，你就得重新修改代码了。

