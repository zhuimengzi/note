### ECMA-262-1-8-types

ECMAScript语言类型有Undefined，Null，Boolean，String，Symbol，Number和Object。

#### Undefined

Undefined类型只有一个值，称为undefined，任何尚未分配值的变量都是undefined。

#### Null

Null类型只有一个值，称为null。

#### Boolean

Boolean类型具有两个值分别是true和false。

#### String

字符串类型是所有有限的零个或多个 16 位无符号整数值（“元素”）的有序序列，最大长度为253-1个元素。 字符串类型通常用于表示运行的ECMAScript程序中的文本数据，在这种情况下，String中的每个元素都被视为一个UTF-16代码单元，每个元素都被认为占有此序列中的一个位置，用非负数值索引这些位置。任何时候，第一个元素（若存在）在位置 0，下一个元素（若存在）在位置 1，依此类推。字符串的长度即其中元素的个数。空字符串长度为零，因而不包含任何元素。

每个元素被解释为单个UTF-16代码单元。 但是，ECMAScript对String值中的代码单元序列没有任何限制和要求，因此当解释为UTF-16代码单元序列时，它们可能不正确，不解释字符串内容的操作将它们视为未分化16位无符号整数的序列。 

- String.prototype.normalize

可以用来显式地规范化一个String值。

- String.prototype.localeCompare 

只有明确指定为语言或区域设置敏感的操作会产生语言敏感的结果。

说明比较结果的数字，如果 stringObject 小于 target，则 localeCompare() 返回小于 0 的数。如果 stringObject 大于 target，则该方法返回大于 0 的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回 0。

把 < 和 > 运算符应用到字符串时，它们只用字符的 Unicode 编码比较字符串，而不考虑当地的排序规则。以这种方法生成的顺序不一定是正确的。例如，在西班牙语中，其中字符 “ch” 通常作为出现在字母 “c” 和 “d” 之间的字符来排序。

localeCompare() 方法提供的比较字符串的方法，考虑了默认的本地排序规则。ECMAscript 标准并没有规定如何进行本地特定的比较操作，它只规定该函数采用底层操作系统提供的排序规则。

> 这种设计背后的理由是尽可能简单，高效地执行Strings。 如果ECMAScript源文本处于规范化形式C，则字符串字面值也将被归一化，只要它们不包含任何Unicode转义序列即可。

#### Symbol 

Symbol类型是可以用作Object属性键的所有非String值的集合。

每个可能的符号值都是独一无二的。

每个符号值不可变地保存一个名为[[Description]]的关联值，它们是未定义的，也可以是一个String值。

- Well-Known Symbols

众所周知的符号是内置符号值，由本规范的算法明确引用。 它们通常用作其值用作规范算法的扩展点的属性的键。 除非另有规定，众所周知的符号值由所有领域共享。

在本说明书中，通过使用@@ name形式的符号来引用公知的符号，其中“name”是表1中列出的值之一。

​								Table 1: Well-known Symbols

| Specification Name   | [[Description]]               | Value and Purpose                        |
| -------------------- | ----------------------------- | ---------------------------------------- |
| @@hasInstance        | `"Symbol.hasInstance"`        | 确定构造函数对象是否将对象识别为构造函数实例之一的方法，由instanceof运算符调用。 |
| @@isConcatSpreadable | `"Symbol.isConcatSpreadable"` | 一个布尔值属性，如果为true，则表示对象应该由Array.prototype.concat平坦化为其数组元素。 |
| @@iterator           | `"Symbol.iterator"`           | 返回对象的默认迭代器的方法。 被称为for-of语句。              |
| @@match              | `"Symbol.match"`              | A regular expression method that matches the regular expression against a string. Called by the `String.prototype.match` method. |
| @@replace            | `"Symbol.replace"`            | 与正则表达式匹配字符串的正则表达式方法。 由String.prototype.match方法调用。 |
| @@search             | `"Symbol.search"`             | 一个正则表达式方法，它返回与正则表达式匹配的字符串中的索引。 由String.prototype.search方法调用。 |
| @@species            | `"Symbol.species"`            | 一个函数值属性，它是用于创建派生对象的构造函数。                 |
| @@split              | `"Symbol.split"`              | 一个正则表达式方法，它在与正则表达式匹配的索引处分割字符串。 由String.prototype.split方法调用。 |
| @@toPrimitive        | `"Symbol.toPrimitive"`        | 将对象转换为相应的原始值的方法。 由ToPrimitive抽象操作调用。     |
| @@toStringTag        | `"Symbol.toStringTag"`        | 用于创建对象的默认字符串描述的String值属性。 由内置方法Object.prototype.toString访问。 |
| @@unscopables        | `"Symbol.unscopables"`        | 对象值属性，其自有和继承的属性名称是从关联对象的环境绑定中排除的属性名称。    |

#### Number 

数值类型拥有 18437736874454810627个值，表示IEEE标准二进制浮点运算中规定的双精度64位格式的IEEE 754-2008值，不同之处在于9007199254740990将IEEE标准的不同“非数字”值作为单个特殊的NaN值在ECMAScript中表示。 （请注意，NaN值由程序表达式NaN生成。）在某些实现中，外部代码可能能够检测各种非数字值之间的差异，但这种行为是依赖于实现的; 对于ECMAScript代码，所有NaN值彼此无法区分。

> 在数值存储到其中之后，在ArrayBuffer中观察到的位模式不一定与ECMAScript实现使用的数值的内部表示相同。

还有另外两个特殊值，称为正无穷和负无穷。为简洁起见，在说明目的时，用符号 +∞ 和 -∞ 分别代表它们。（请注意，两个无限数值由程序表达式 +Infinity（简作Infinity） 和 -Infinity 产生，并假设执行程序不能调整定义的全局变量 Infinity。）

另外 18437736874454810624 个值被称为有限数值。其中的一半是正数，另一半是负数，对于每个正数而言，都有一个与之对应的、相同规模的负数。

请注意，还有一个 正零 和一个 负零 。为简洁起见，类似地，在说明目的时，分别用用符号 +0 和 -0 代表这些值。（请注意，这两个数字零由程序表达式 +0（简作 0） 和-0 产生。）

这18437736874454810622 个有限非零值分为两种：

- 其中 18428729675200069632个是常规值，形如

```javascript
s * m * 2e
```

这里的 s 是 +1 或 -1，m 是一个小于 253 但不小于 252 的正整数，e 是一个闭区间 -1074 到 971 中的整数。

剩下的 9007199254740990个值是非常规的，形如

```javascript
s * m * 2e
```

这里的 s 是 +1 或 -1，m 是一个小于 252 的 正整数，e 为 -1074

请注意，所有规模不超过 253 的正整数和负整数都可被数值类型表示（不过，整数 0 有两个呈现形式，+0 和 0）。

如果一个有限的数值非零且用来表达它（上文两种形式之一）的整数 m 是奇数，则该数值有 奇数标记 (odd significand)。否则，它有 偶数标记 (even significand)。

在本规范中，当 x 表示一个精确的非零实数数学量（甚至可以是无理数，比如 π）时，短语 "the number value for x" 意为，以下面的方式选择一个数字 值。考虑数值类型的所有有限值的集合（不包括 -0 和两个被加入在数值类型中但不可呈现的值，即 21024（即 +1 * 253 * 2971）和 -21024 （那是 -1 * 253 * 2971）。选择此集合 中值最接近 x 的一员，若集合中的两值近似相等，那么选择有偶数标记的那个；为此，21024 和 -21024 这两个超额值被认为有偶数标记。最终，若选择 21024 ，用 +∞替换它；若选择 -21024 ，用 -∞替换它；若选择 +0，有且只有 x 小于零时，用 -0 替换它；其它任何被选取的值都不用改变。结果就是 x 的数字值。（此过程正是 IEEE-754"round to nearest" 模式对应的行为。）

一些ECMAScript运算符仅处理特定范围内的整数，例如-231到231-1（包括0或216-1），或0到216-1之间的整数。 这些运算符接受Number类型的任何值，但是首先将每个这样的值转换为预期范围内的整数值。

#### Object 

Object 是一个属性的集合。每个属性既可以是一个命名的数据属性，也可以是一个命名的访问器属性，或是一个内部属性：

- 数据属性将键值与ECMAScript语言值和一组布尔属性相关联。
- 访问器属性将键值与一个或两个访问器函数以及一组布尔属性相关联。 访问器函数用于存储或检索与属性相关联的ECMAScript语言值。
- 内部属性（internal property）没有名字，且不能直接通过 ECMAScript 语言操作。内部属性的存在纯粹为了规范的目的。

使用键值识别属性。 属性键值是ECMAScript String值或Symbol值。 所有字符串和符号值（包括空字符串）都作为属性键有效。 属性名称是一个String值的属性键。

整数索引是一个String值属性键，它是一个规范数字String，其数值为+0或正整数≤2_53-1，数组索引是整数索引，其数值i在+0≤i<2_32-1范围内。

属性键用于访问属性其值。 属性有两种访问：get和set，分别对应于取值和赋值。 通过get和set可以访问的属性包括两个类，它们是对象的直接部分，以及由另一个关联对象通过属性继承关系提供的继承属性。 继承的属性可以是关联对象自己的或继承的属性。 每个对象的属性必须是不同的键值。

所有对象都是逻辑上的属性集合，但是有多种形式的对象在其用于访问和操作其属性的语义上有所区别。 普通对象是对象的最常见形式，并具有默认对象语义。 异乎寻常的对象是任何形式的对象，其属性语义与默认语义不同。

- Property Attributes

本规范中的特性（Attributes）用于定义和解释命名属性（properties）的状态。命名的数据属性由一个名字关联到一个下表中列出的特性 (attributes)

​								Table 2:命名的数据属性的特性

| 特性名称             | 取值范围               | 描述                                       |
| ---------------- | ------------------ | ---------------------------------------- |
| [[Value]]        | 任何 ECMAScript 语言类型 | 通过读 property 来取到该值                       |
| [[Writable]]     | Boolean            | 如果为 false，试图通过 ECMAScript 代码 [[Set]] 去改变该属性的 [[Value]]，将会失败 |
| [[Enumerable]]   | Boolean            | 如果为 true，则该属性可被 for-in 枚举出来，否则，该属性不可枚举。  |
| [[Configurable]] | Boolean            | 如果为 false，试图删除该属性，改变该属性为访问器属性，或改变它的 attributes（和 [[Value]] 不同），都会失败。 |

访问器属性将键值与表3中列出的属性相关联。

​								Table 3:命名的访问器属性的特性

| 特性名称             | 取值范围               | 描述                                       |
| ---------------- | ------------------ | ---------------------------------------- |
| [[Get]]          | Object 或 Undefined | 如果该值为一个 Object 对象，那么它必须是一个函数对象。每次有对该属性进行 get 访问时，该函数的内部方法 [[Call]]会被一个空参数列表调用，以返回该属性值 |
| [[Set]]          | Object 或 Undefined | 如果该值为一个 Object 对象，那么它必须是一个函数对象。每次有对该属性进行 set 访问时，该函数的内部方法 [[Call]]会被一个参数列表调用，这个参数列表包含分配的值作为唯一的参数。property 的内部方法 [[Set]] 产生的影响可能会，但不是必须的，对随后的 property 内部方法 [[Get]] 的调用返回结果产生影响。 |
| [[Enumerable]]   | Boolean            | 如果为 true，则该属性可被 for-in 枚举出来，否则，该属性不可枚举。  |
| [[Configurable]] | Boolean            | 如果为 false，试图删除该属性，改变该属性为访问器属性，或改变它的 attributes（和 [[Value]] 不同），都会失败。 |

 如果某个命名属性的特性值没有在此规范中明确给出，那么它的默认值将使用下表的定义。

​									Table 4:默认特性值

| 特性名称             | 默认值       |
| ---------------- | --------- |
| [[Value]]        | undefined |
| [[Get]]          | undefined |
| [[Set]]          | undefined |
| [[Writable]]     | false     |
| [[Enumerable]]   | false     |
| [[Configurable]] | false     |

- Object 内部属性及方法

本规范使用各种内部属性来定义对象值的语义。这些内部属性不是 ECMAScript 语言的一部分。本规范中纯粹是以说明为目的定义它们。ECMAScript 实现必须表现为仿佛它被这里描述的内部属性产生和操作。内部属性的名字用闭合双方括号 括起来。如果一个算法使用一个对象的一个内部属性，并且此对象没有实现需要的内部属性，那么抛出TypeError 异常。

内部方法和属性在本规范中使用双方括号[[]]中的名称进行标识。

表5总结了本规范使用的基本内部方法，适用于ECMAScript代码创建或操作的所有对象。 每个对象必须具有所有必要的内部方法的算法。 然而，所有对象不一定对这些方法使用相同的算法。

表5和其他类似表的“签名”列描述了每个内部方法的调用模式。 调用模式始终包含描述性参数名称的括号列表。 如果参数名称与ECMAScript类型名称相同，则该名称将描述参数值所需的类型。 如果一个内部方法显式地返回一个值，其参数列表后跟符号“→”和返回值的类型名称。 签名中使用的类型名称指的是第6条中定义的类型，增加了以下附加名称。 “any”表示该值可能是任何ECMAScript语言类型。 内部方法隐式返回完成记录。 除了其参数之外，内部方法始终可以访问作为方法调用目标的对象。

​								Table 5: Essential Internal Methods

| 内部方法                  | 取值范围                                     | 描述                                       |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| [[GetPrototypeOf]]    | () **→** Object \| Null                  | 确定为该对象提供继承属性的对象。 空值表示没有继承属性。             |
| [[SetPrototypeOf]]    | (Object \| Null) **→**Boolean            | 将此对象与提供继承属性的另一个对象相关联。 传递null表示没有继承的属性。 返回true表示操作已成功完成或为false，表示操作未成功。 |
| [[IsExtensible]]      | ( ) **→** Boolean                        | 确定是否允许向此对象添加其他属性。                        |
| [[PreventExtensions]] | ( ) **→** Boolean                        | 控制是否可以将新属性添加到此对象。 如果操作成功，则返回true，如果操作失败则返回false。 |
| [[GetOwnProperty]]    | (propertyKey) **→** Undefined \| [Property Descriptor](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-property-descriptor-specification-type) | 返回属性描述符，该属性描述符为该对象的属性，该对象的关键字为propertyKey，如果不存在此属性，则为undefined。 |
| [[HasProperty]]       | (propertyKey) **→**Boolean               | 返回一个布尔值，指示该对象是否具有自己的或继承的属性，其属性为propertyKey。 |
| [[Get]]               | (propertyKey, Receiver) **→** *any*      | 从该对象返回其属性为propertyKey的属性的值。 如果必须执行任何ECMAScript代码来检索属性值，则在评估代码时将使用Receiver作为此值。 |
| [[Set]]               | (propertyKey, value, Receiver) **→** Boolean | 将其属性为propertyKey的属性的值设置为值。 如果必须执行任何ECMAScript代码来设置属性值，则在评估代码时将使用Receiver作为此值。 如果属性值设置为true，则返回true，否则返回false。 |
| [[Delete]]            | (propertyKey) **→**Boolean               | 从该对象中删除其属性为propertyKey的属性。 如果属性未被删除并且仍然存在，则返回false。 如果属性被删除或不存在，返回true。 |
| [[DefineOwnProperty]] | (propertyKey, PropertyDescriptor)**→** Boolean | 创建或更改自己的属性，其属性为propertyKey，以具有PropertyDescriptor描述的状态。 如果该属性成功创建/更新，则返回true，如果无法创建或更新该属性，则返回false。 |
| [[OwnPropertyKeys]]   | ()**→**[List](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-list-and-record-specification-type) of propertyKey | 返回一个列表，其元素是对象的所有属性键。                     |

表6总结了可被称为函数的对象支持的其他基本内部方法。 函数对象是支持[[Call]]内部方法的对象。 一个构造函数是支持[[Construct]]内部方法的函数对象。

​					Table 6: 功能对象的附加基本内部方法

| Internal Method | Signature                                | Description                              |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| [[Call]]        | (*any*, a [List](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-list-and-record-specification-type) of*any*) **→***any* | 运行与此对象关联的代码。通过函数调用表达式调用。SpecOp 的参数是一个 this 对象和函数调用表达式传来的参数组成的列表。实现了这个内部方法的对象是 可调用 的。只有作为宿主对象的可调用对象才可能返回 引用 值。 |
| [[Construct]]   | (a [List](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-list-and-record-specification-type) of*any*, Object) **→**Object | 通过 new 运算符调，创建对象。SpecOp 的参数是通过 new 运算符传的参数。实现了这个内部方法的对象叫做 构造器 。 |

普通对象和标准异常对象的基本内部方法的语义在第9节中指定。如果实现中不支持外部对象的内部方法的任何指定使用，则尝试时该使用必须引发TypeError异常。

 所有对象都有一个叫做 [[Prototype]] 的内部属性。此对象的值是 null 或一个对象，并且它用于实现继承。一个原生属性是否可以把宿主对象作为它的 [[Prototype]] 取决于实现。所有 [[Prototype]] 链必须是有限长度（即，从任何对象开始，递归访问 [[Prototype]] 内部属性必须最终到头，并且值是 null）。从 [[Prototype]] 对象继承来的命名数据属性（作为子对象的属性可见）是为了 get 请求，但无法用于 put 请求。命名访问器属性会把 get 和 put 请求都继承。

 所有 ECMASCript 对象都有一个 Boolean 值的 [[Extensible]] 内部属性，它控制是否可以给对象添加命名属性。如果 [[Extensible]] 内部属性的值是 false 那么不得给对象添加命名属性。此外，如果 [[Extensible]] 是 false 那么不得更改对象的 [[Class]] 和 [[Prototype]] 内部属性的值。一旦 [[Extensible]] 内部属性的值设为 false 之后无法再更改为 true。

本规范的定义中没有 ECMAScript 语言运算符或内置函数允许一个程序更改对象的 [[Class]] 或 [[Prototype]] 内部属性或把 [[Extensible]] 的值从 false 更改成 true。实现中修改 [[Class]], [[Prototype]], [[Extensible]] 的个别扩展必须不违反前一段定义的不变量。

 本规范的每种内置对象都定义了 [[Class]] 内部属性的值。宿主对象的 [[Class]] 内部属性的值可以是除了 "Arguments", "Array", "Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object", "RegExp", "String" 的任何字符串。[[Class]] 内部属性的值用于内部区分对象的种类。注，本规范中除了通过 Object.prototype.toString ( 见 15.2.4.2) 没有提供任何手段使程序访问此值。

 除非特别指出，原生 ECMAScrpit 对象的公共内部方法的行为描述在 8.12。Array 对象的 [[DefineOwnProperty]] 内部方法有稍不同的实现（见 15.4.5.1），又有 String 对象的 [[GetOwnProperty]] 内部方法有稍不同的实现（见 15.5.5.2）。Arguments 对象（10.6）的 [[Get]]，[[GetOwnProperty]]，[[DefineOwnProperty]]，[[Delete]] 有不同的实现。Function 对象（15.3）的 [[Get]] 的有不同的实现。

 除非特别指出，宿主对象可以以任何方式实现这些内部方法，一种可能是一个特别的宿主对象的 [[Get]] 和 [[Put]] 确实可以存取属性值，但 [[HasProperty]] 总是产生 false。然而，如果任何对宿主对象内部属性的操作不被实现支持，那么当试图操作时必须抛出 TypeError 异常。

 宿主对象的 [[GetOwnProperty]] 内部方法必须符合宿主对象每个属性的以下不变量 ：

- 如果属性是描述过的数据属性，并随着时间的推移，它可能返回不同的值，那么即使没有暴露提供更改值机制的其他内部方法，[[Writable]] 和 [[Configurable]] 之一或全部必须是 true。
- 如果属性是描述过的数据属性，并且其 [[Writable]] 和 [[Configurable]] 都是 false。那么所有对 [[GetOwnProperty]] 的呼出，必须返回作为属性 [[Value]] 特性的SameValue(9.12)。
- 如果 [[Writable]] 特性可以从 false 更改为 true，那么 [[Configurable]] 特性必须是 true。
- 当 ECMAScript 代码监测到宿主对象的 [[Extensible]] 内部属性值是 false。那么如果调用 [[GetOwnProperty]] 描述一个属性是不存在，那么接下来所有调用这个属性必须也描述为不存在。

 如果 ECMAScript 代码监测到宿主对象的 [[Extensible]] 内部属性是 false，那么这个宿主对象的 [[DefineOwnProperty]] 内部方法不允许向宿主对象添加新属性。

 如果 ECMAScript 代码监测到宿主对象的 [[Extensible]] 内部属性是 false，那么它以后必须不能再改为 true。

- 基本内在方法的不变量

ECMAScript引擎的对象的内部方法必须符合以下指定的不变量列表。 普通ECMAScript对象以及本规范中的所有标准异常对象都会保留这些不变量。 ECMAScript Proxy对象通过对[[ProxyHandler]]对象上调用的陷阱结果进行运行时检查来维护这些不变量。

提供异构对象的任何实现也必须为这些对象维护这些不变量。 违反这些不变量可能会导致ECMAScript代码具有不可预测的行为并创建安全问题。 但是，违反这些不变量绝对不会损害实现的内存安全。

实现不能允许以任何方式绕过这些不变量，例如通过提供实现基本内部方法的功能的替代接口，而不强制实现其不变量。

定义：

- 内部方法的目标是调用内部方法的对象。
- 如果从[[IsExtensible]]内部方法返回false，或者[[PreventExtensions]]内部方法为true，那么目标是不可扩展的。
- 不存在的属性是不可扩展目标上不存在的属性。
- 所有对SameValue的引用都是根据SameValue算法的定义。

[[GetPrototypeOf]] ( )

- 返回值的类型必须为Object或Null。


- 如果目标是不可扩展的，并且[[GetPrototypeOf]]返回一个值v，那么将来任何对[[GetPrototypeOf]]的调用都应该返回相同的值。

> 对象的原型链应该具有有限的长度（也就是说，从任何对象开始，将[[GetPrototypeOf]]内部方法递归应用于其结果应最终导致值为null）。 但是，如果原型链包含任何不使用[[GetPrototypeOf]]的普通对象定义的异常对象，则此要求不可执行为对象级不变量。 这样的原型链可能会在访问对象属性时产生无限循环。