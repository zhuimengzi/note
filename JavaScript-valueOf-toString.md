### 有关valueOf跟toString

假设在古代，一两黄金换20两白银，一两白银换25枚铜钱，构建描述货币的类：

```javascript
function Money(gold, silver, coin)
{
        this.gold = gold;
        this.silver = silver;
        this.coin = coin;
}

Money.parse = function(value)
{
        var coin = parseInt(value % 25);
        var silver = parseInt(value / 25 % 20);
        var gold = parseInt(value / 500);
        return new Money(gold, silver, coin);
}

Money.prototype.valueOf = function()
{
        return ((this.gold * 20) + this.silver) * 25 + this.coin;
}

Money.prototype.toString = function()
{
        return this.gold + "两黄金，" + this.silver + "两白银，" + this.coin + "文钱";
}

var money1 = new Money(5, 6, 1);
var money2 = new Money(2, 4, 6);

var money3 = Money.parse(money1 + money2);
alert(money3);
```

运行一下，可以看到结果。

这里隐式调用了valueOf跟toString，二者并存的情况下，在数值运算中，优先调用了valueOf，字符串运算中，优先调用了toString。比如

money1 + money2，调用的就是两者valueOf之后的值相加，而alert的时候，把money3先toString了一下。

这个例子其实是模仿js内置对象Date的，Date基本上也是这样处理问题的。