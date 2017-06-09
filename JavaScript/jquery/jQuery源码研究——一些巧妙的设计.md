### new jQuery.fn.init

new jQuery.fn.init这段代码是为了实现我们在不使用new的情况下通过调用函数的方式也能使用jQuery，但是为什么jQuery不直接在代码中通过new jQuery()的方式来实现呢？原因就在于如果我们像下面那样去做，就会是一个死循环。

```javascript
jQuery = function( selector, context ) {
  return new jQuery( selector, context );
}
```

当然了，一般我们会去判断一下jQuery是以什么方式调用的

```javascript
jQuery = function( selector, context ) {
  if(this === window){
    return new jQuery( selector, context );
  }
}
```

而jQuery的做法是将jQuery.fn.init作为构造器，这样以上的问题就迎刃而解了。