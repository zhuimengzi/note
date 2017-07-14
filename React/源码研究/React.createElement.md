# React.createElement(type, [props, ...children])

执行ReactElementValidator.createElement方法判断参数是否符合规格,如果符合规格调用ReactElement.createElement方法进行参数调整,
最后调用ReactElement方法对参数进行配置,返回配置后的元素对象
