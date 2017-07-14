# helper函数使用说明

有两种使用方式

- helper.xx
- helper(xx)

## 第一种方式使用示例

### 参数

```
helper.div(className, props, ...child)
```

className：string，如果多个class使用空格隔开，可选
props：{}，可选
child：string | element，可选

### 例子

```javascript
h.div({},
  h.h1({href:123, className:'a c'},
  	h('em')
  ),
  h.p({}, '内容')
);
```

### 参数说明

如果第一个参数是一个字符串，第二个参数是一个对象，并且第二个参数中有className属性，则使用第二个对象中的className

如果第一个参数是一个对象，则相当于第一个参数充当了props，class通过使用className设置

如果需要使用child则必须在child参数之前传递一个空对象，否则会把child当成是props或className

### 其他说明

这只是一种简洁访问的方式，最终还是调用的helper()，除了helper.div以外还有一些常用的标签，如span、section、footer、i、video等

## 第二种方式使用示例

### 参数

```
helper(tag, className, props, ...child)
```

tag：tag | component
其他参数和第一种方式一样

