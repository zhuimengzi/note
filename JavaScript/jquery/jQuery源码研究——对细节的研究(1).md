## jQuery源码研究——对细节的研究(1)

```javascript
// JQuery入口
jQuery = function( selector, context ) {
	// 初始化原型中的init方法
	return new jQuery.fn.init( selector, context );
}
```

$('div')最终调用的是jQuery.fn.init方法

jQuery.fn是jQuery.prototype的一个简写

```javascript
// 为jQuery原型添加方法
jQuery.fn = jQuery.prototype = {
	// 当前jQuery版本
	jquery: version,
	// 维护构造器
	constructor: jQuery,
	// 设置length属性方便将jQuery对象当作数组来使用
	length: 0,
	// 去掉数组中jQuery添加的内容，返回一个干净的数组
	toArray: function() {
		return slice.call( this );
	},
	// 返回获取到的第N个元素
	get: function( num ) {
		// 如果不传或传递null、undefined则将整个匹配的元素设置为干净的数组并返回
		if ( num == null ) {
			return slice.call( this );
		}
		// 支持正反方向取值
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},
	// 返回一个新的匹配元素集
	pushStack: function( elems ) {
		// 创建一个新的jQuery原型对象，并将元素绑定到这个对象上
		var ret = jQuery.merge( this.constructor(), elems );
		// 将旧的原型对象保存起来
		ret.prevObject = this;
		// 返回新对象
		return ret;
	},
	// 对返回的元素集合进行遍历
	each: function( callback ) {
		return jQuery.each( this, callback );
	},
	// 对元素集进行修改，返回一个新对象
	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},
	// 对元素集进行截取，返回一个新对象
	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},
	// 取元素集第一项，返回一个新对象
	first: function() {
		return this.eq( 0 );
	},
	// 取元素集最后一项，返回一个新对象
	last: function() {
		return this.eq( -1 );
	},
	// 返回一个新的jQuery对象元素集
	eq: function( i ) {
		// 支持正负取值
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		// 创建一个新的jQuery对象元素集
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},
	// 返回上一次元素集对象，如果没有则返回一个新的jQuery对象
	end: function() {
		return this.prevObject || this.constructor();
	},
	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};
```

pushStack方法会调用jQuery()创建一个新的jQuery对象，并将旧的对象保存到这个新对象的prevObject属性中，举个例子

```
<div></div>
<div></div>
<div></div>
```

使用jQuery获取这几个元素并使用eq来指定某个元素

```javascript
$('div').eq(0)
// [div, prevObject: jQuery.fn.init(3)]
```

将旧对象保存来下来，才有可能实现end方法，这样可以很方便的链式调用

```javascript
$('div').eq(1).addClass('a').end().eq(0).css('display','none');
// 执行end后又回到了eq之前的状态
```

如果eq方法是直接删除其他元素，那么这个功能就不可能实现了。

我们再来看看merge方法

```javascript
// 将second中的内容复制到first对象中
merge: function( first, second ) {
  // + 可以将字符串转成数字
  var len = +second.length,
      j = 0,
      // 如果first是jQuery对象，则获取到的是jQuery原型对象中的length属性，默认为0
      i = first.length;
  // 将second每项赋值给first
  for ( ; j < len; j++ ) {
    first[ i++ ] = second[ j ];
  }
  // 维护first对象length属性
  first.length = i;
  return first;
}
```

凡是在jQuery原型中的方法都可以链式调用。

jQuery.extend在jQuery上添加方法，jQuery.fn.extend在jQuery原型上添加方法

```javascript
jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		// 是否开启深复制
		deep = false;
	// 以下是对传递参数的判断，确定参数关系

	// 如果参数1传递的是true则开启深度复制
	if ( typeof target === "boolean" ) {
		deep = target;
		// 跳过布尔值和目标值
		target = arguments[ i ] || {};
		i++;
	}
	// 处理当target是字符串或其他东西时的情况
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}
	// 如果只传递一个参数，则扩展jQuery本身
	if ( i === length ) {
		target = this;
		i--;
	}
	for ( ; i < length; i++ ) {
		// 只处理非空/未定义的值
		if ( ( options = arguments[ i ] ) != null ) {
			// 扩展基础对象
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];
				// 防止无限循环
				if ( target === copy ) {
					continue;
				}
				// 如果开启深度复制则对数组和对象(纯粹对象)进行深复制
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					// 判断是对象还是数组
					if ( copyIsArray ) {
						// 重置copyIsArray
						copyIsArray = false;
						// 如果目标数组属性src是一个数组则使用src作为目标数组
						clone = src && Array.isArray( src ) ? src : [];
					} else {
						// 如果目标对象属性src是一个对象则使用src作为目标对象
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}
					// 递归复制
					target[ name ] = jQuery.extend( deep, clone, copy );
				// 对简单值类型或未开启深度复制并且值不为空则走这里
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	// 返回扩展后的对象
	return target;
};
```

