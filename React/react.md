## react知识点

1、只能有一个根元素，多个元素必须放在一个父节点中
2、所有js语法使用{}将代码包起来
3、单标签必须闭合
4、组件中的this代表组件，this.props可以获取组件自定义属性
5、class实际上还是一个函数，不过是对函数进行了包装，所以react组件其实就是一个构造函数
6、组件自定义属性，不能直接通过赋值的方式重写,如果想更改数据，应该使用state状态
7、super()执行父类的构造函数，可以继承父类的一些默认属性
8、在组件中获取render中的元素，可以使用event.target 、 document.querySelector 或者给元素添加一个ref属性，使用this.refs.xx来获取，使用原则：获取当前元素使用event.target，获取其他元素使用ref，不得已才使用querySelector来获取
9、react中的event被包装过，在14版本之后如果想要阻止事件冒泡需要使用event.nativeEvent.stopImmediatePropagation()
10、组件需要执行的方法最好放在组件生命周期中
11、react中的表单被限制了部分功能，如果需要使用类似value这样的属性，需要写成defaultValue，也就是前面加defalut
12、父级向子级传递参数通过props传递，子级向父级传递数据也是通过props来传递，但传递的是一个函数，在子级中执行这个函数，之所以要传递函数是因为函数可以传递参数