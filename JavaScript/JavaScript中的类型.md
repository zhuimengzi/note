### javascript中的类型

类型就是把内存中的一个二进制序列赋予某种意义。

#### 强类型和弱类型

按照计算机语言的类型系统的设计方式,可以分为强类型和弱类型两种。二者之间的区别，就在于计算时是否可以不同类型之间对使用者透明地隐式转换。从使用者的角度来看，如果一个语言可以隐式转换它的所有类型，那么它的变量、表达式等在参与运算时，即使类型不正确，也能通过隐式转换来得到正确地类型，这对使用者而言，就好像所有类型都能进行所有运算一样，所以这样的语言被称作弱类型。与此相对，强类型语言的类型之间不一定有隐式转换（比如C++是一门强类型语言，但C++中double和int可以互相转换，但double和任何类型的指针之间都需要强制转换）

然而正是因为JavaScript没有这些约束，所以可以很方便地拼接数字和字符串类型。所以，约束和灵活性对语言的设计者而言，永远是需要平衡的一组特性。

#### instanceof

原型只对于标准所描述的Object类型有意义，所以instanceof对于所有非Object对象都会得到false，而且instanceof只能判断是否属于某一类型，无法得到类型，但是instanceof的优势也是显而易见的，它能够分辨自定义的"类"构造出的对象。

#### Object.prototype.toString

Object.prototype.toString原本很难被调用到,所有的JavaScript内置类都覆盖了toString这个方法，而对于非内置类构造出的对象，Object.prototype.toString又只能得到毫无意义的[object Object]这种结果。所以相当长的一段时间内，这个函数的神奇功效都没有被发掘出来。

在标准中，Object.prototype.toString的描述只有3句

1. 获取this对象的[[class]]属性


2. 通过连接三个字符串**"[object ",** 结果(1), 和 **"]"**算出一个字符串


3. 返回 结果(2)

