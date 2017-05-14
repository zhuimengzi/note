### JavaScript-垃圾回收

```javascript
// JavaScript对象何时失效
//---------------------------------------------------------
function testObject() {
  var _obj1 = new Object();
}
function testObject2() {
  var _obj2 = new Object();
  return _obj2;
}
// 示例1
testObject();
// 示例2
testObject2()
// 示例3
var obj3 = testObject2();
obj3 = null;
// 示例4
var obj4 = testObject2();
var arr = [obj4];
obj3 = null;
arr = [];
```



在这四个示例中：
  - “示例1”在函数testObject()中构造了_obj1，但是在函数退出时，
​    它就已经离开了函数的上下文环境，因此_obj1失效了；
  - “示例2”中，testObject2()中也构造了一个对象_obj2并传出，因
​    此对象有了“函数外”的上下文环境(和生存周期)，然而由于函数
​    的返回值没有被其它变量“持有”，因此_obj2也立即失效了；
  - “示例3”中，testObject2()构造的_obj2被外部的变量obj3持用了，
​    这时，直到“obj3=null”这行代码生效时，_obj2才会因为引用关系
​    消失而失效。
  - 与示例3相同的原因，“示例4”中的_obj2会在“arr=[]”这行代码
​    之后才会失效。

但是，对象的“失效”并不等会“释放”。在JavaScript运行环境的内部，没
有任何方式来确切地告诉用户“对象什么时候会释放”。这依赖于JavaScript
的内存回收机制。