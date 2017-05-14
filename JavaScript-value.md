### JavaScript-value

关于这个，我觉得从结果上看，toString跟valueOf一致，是因为js的自动类型转换。刚才想了半天，想要举个反例，没想出来:L 

呃，我说个不太确切的吧，复数，假设有一个Complex，它的toString是按照格式输出a+bi这样，valueOf假设取的是它这个点到坐标原点的距离r，那么，Complex的实例就可以直接用比较操作符来判断大小。

唉，表达能力极其差劲

````javascript
<!--
alert(Function.prototype.valueOf==Array.prototype.valueOf);
alert(Function.prototype.toString==Array.prototype.toString);

function ClassA()
{
    this.valueOf=function(){return "a";}
    this.toString=function(){return "A";}
}
alert(new ClassA+"");
alert(new ClassA);
//-->
````

这个应该这样理解
toString是用于输出的
valueOf是用于运算的，在不强制指定valueOf时 它默认返回toString

