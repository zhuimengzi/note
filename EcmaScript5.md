### 严格模式

strict模式究竟是什么意思？很多同学认为使用strict模式是强迫使用良好的代码风格，我的意见是strict不是良好风格的代码而是高效的代码。通过使用strict模式，编译器有了把变量优化成内存地址的能力。

具体限制为
eval中不再能声明变量，声明的函数将会变成全局的
var定义只能在函数级，if、for、while、switch等不能有var定义
不能使用with语句
不能使用arguments.callee
普通的函数调用中this是null
试图改变只读属性将会抛出异常
delete失败会抛出异常
arguments不再和形参绑定 
函数不能有同名参数

