## Sizzle选择器引擎源码研究

Sizzle是一个强大的选择器引擎，并在jquery中使用，它的强大之处在于我们能够在javascript中按照css选择器的风格来选择元素，另外作者还使用了独特的方式对Sizzle选择器引擎进行了优化，而它的这种做法非常值得我们去学习。

看源码的第一步就是找到一个入口点，然后逐步深入，我们找到Sizzle的入口并打上断点看看它怎么执行的。

![QQ截图20170602220425](C:\Users\Administrator\Desktop\QQ截图20170602220425.png)

html

```html
<div id="div">
   <p></p>
</div>
```

执行以下js

```javascript
Sizzle('#box p')
```

