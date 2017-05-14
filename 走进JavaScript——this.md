## 走进JavaScript——this

一切都从这个函数开始

```javascript
function fn(){
    console.log(this);
}
fn();
```

对于这个函数的执行，我们来看看ECMA标准是怎么说的:

> 调用CallExpression : MemberExpression Arguments 将按照下面的过程执行 
>
> 1. 令 ref 为解释执行 MemberExpression 的结果 .
> 2. .............// 和this无关解释
> 3. 如果 Type(ref) 为 Reference，那么 如果 IsPropertyReference(ref) 为 true，那么 令 thisValue 为 GetBase(ref). 否则 , ref 的基值是一个环境记录项 令 thisValue 为调用 GetBase(ref) 的 ImplicitThisValue 具体方法的结果
> 4. 否则 , 假如 Type(ref) 不是 Reference. 令 thisValue 为 undefined.

解释成代码：

```javascript
if(Type(ref) === Reference){
  if(IsPropertyReference(ref)){
    thisValue = GetBase(ref);
  }else{
    ref的基值 = 环境记录项;
    thisValue = GetBase(ref) 的 ImplicitThisValue 方法的结果
  }
}else{
  	thisValue = undefined;
}
```

也就是要想知道this是什么必须先搞清楚这个ref是否是Reference类型。

Reference：

> 一个 引用 (Reference) 是个已解决的命名绑定。一个引用由三部分组成， 基 (base) 值， 引用名称（referenced name） 和布尔值 严格引用 (strict reference) 标志。基值是 undefined, 一个 Object, 一个 Boolean, 一个 String, 一个 Number, 一个 environment record 中的任意一个。基值是 undefined 表示此引用可以不解决一个绑定。引用名称是一个字符串。

规范上说这个ref = 执行MemberExpression后的结果，而这个MemberExpression就是表达式fn，fn是一个标识符，而规范说要将这个fn标识符进行执行，所以我们还要看看这个fn标识符是怎么执行的。

> 标识符的执行结果总是一个 Reference 类型的值。

再来看看这个标识符返回什么东东

> 1. 令 env 为正在运行的执行环境的 词法环境 。
> 2. 如果正在解释执行的语法产生式处在 严格模式下的代码 中，则仅 strict 的值为 true，否则令 strict 的值为 false。
> 3. 以 env，Identifier 和 strict 为参数，调用 GetIdentifierReference 函数，并返回调用的结果。
>
>  解释执行一个标识符得到的结果必定是 引用 类型的对象，且其引用名属性的值与 Identifier 字符串相等。

重点看第3条，他说还要去执行GetIdentifierReference函数，无奈，我们到GetIdentifierReference函数中走一遭吧

> #### GetIdentifierReference (lex, name, strict)
>
>  当调用 GetIdentifierReference 抽象运算时，需要指定一个 词法环境 lex，一个标识符字符串 name 以及一个布尔型标识 strict。lex 的值可以为 null。当调用该运算时，按以下步骤进行：
>
> 1. 如果 lex 的值为 null，则：
>    1. 返回一个类型为 引用 的对象，其基值为 undefined，引用的名称为 name，严格模式标识的值为 strict。
> 2. 令 envRec 为 lex 的环境数据。
> 3. 以 name 为参数 N，调用 envRec 的 HasBinding(N) 具体方法，并令 exists 为调用的结果。
> 4. 如果 exists 为 true，则：
>    1. 返回一个类型为 引用 的对象，其基值为 envRec，引用的名称为 name，严格模式标识的值为 strict。
> 5. 否则：
>    1. 令 outer 为 lex 的 外部环境引用 。
>    2. 以 outer、name 和 struct 为参数，调用 GetIdentifierReference，并返回调用的结果。

解释成代码：

```javascript
function GetIdentifierReference(lex,name,strict){
    var exists;
    if(!lex){
        return {
            base:undefined,
            name:name,
            strict:strict
        };
    }else{
        exists = HasBinding(name);
        if(exists){
            return {
                base:envRec,
                name:name,
                strict:strict
            };
        }else{
           GetIdentifierReference(outer,name,strict);
        }
    }
}
GetIdentifierReference(env,Identifier,strict);
```

因为fn不存在词法环境，所以返回

```javascript
{
  base:undefined,
  name:name,
  strict:strict
};
```

我们回到之前去看看IsPropertyReference(ref)返回什么

> - HasPrimitiveBase(V)。 如果基值是 Boolean, String, Number，那么返回 true。
> - IsPropertyReference(V)。 如果基值是个对象或 HasPrimitiveBase(V) 是 true，那么返回 true；否则返回 false。

由于不符合以上两条规则，所以返回false，然后执行ImplicitThisValue，fn属于声明式环境

> 声明式环境记录项永远将 undefined 作为其 ImplicitThisValue 返回。

返回的是undefined，但是规范还说：

> 1. 如果 函数代码 是 严格模式下的代码 ，设 this 绑定为 thisArg。
> 2. 否则如果 thisArg 是 null 或 undefined，则设 this 绑定为 全局对象 。
> 3. 否则如果 Type(thisArg) 的结果不为 Object，则设 this 绑定为 ToObject(thisArg)。
> 4. 否则设 this 绑定为 thisArg。

因为thisArg是undefined并且不是严格模式，所以最终this绑定的是全局对象（浏览器中window）。



