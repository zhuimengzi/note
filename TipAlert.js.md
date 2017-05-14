## TipAlert.js

TipAlert提供两个功能：alert和confirm

为了解决每次调用这两个方法不重新生成一段html，使用了单例模式，给暴露出来的接口是一个已经new好的对象，虽然已经new过了，但并没有给初始化html，而是将初始化html放在了alert和confirm里面，但这样还是存在着同样的问题，当第二次执行alert方法时又会初始化一遍html，我的解决方法是，在alert里面将需每次执行的代码和只需要执行一次的分开来，再通过覆盖alert本身，如：

```
function a(){
  只需执行一次的代码
  a = function(){
    每次需执行的代码
  };
  a.apply(this,argument);
}
```

