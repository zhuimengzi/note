### JavaScript——ms

### prototype

下面代码的输出结果是什么

```javascript
function MyObj(){
	this.p.pid++;
}
MyObj.prototype.p = {pid:0};
MyObj.prototype.getNum = function(num){
	return this.p.pid + num;
};
var _obj1 = new MyObj();
var _obj2 = new MyObj();
console.log(_obj1.getNum(1) + _obj2.getNum(2));
```

一般看题我都是先跳过定义部分直接看执行部分，因为定义并不会影响结果，我们跳到

```javascript
var _obj1 = new MyObj();
var _obj2 = new MyObj();
```

_obj1创建了一个MyObj，MyObj函数执行了一句`this.p.pid++`,因此此时的pid等于1，接着_obj2又创建了一个MyObj于是又执行了一次`this.p.pid++`，由于p是写在prototype原型中，又因为原型中的值是共享的，因此 _obj2执行后pid等于2

接下来这一句就很简单了

```javascript
_obj1.getNum(1) + _obj2.getNum(2)
```

(2 + 1) + (2 + 2) = 7

这道题主要是考察原型对象以及new的构造过程。











