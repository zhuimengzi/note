## jQuery源码研究——解决命名冲突

在项目中难免不去使用多个插件，如此一来这些插件就有可能出现一样的名称，当出现同名变量时后一个将会覆盖上一个，这样的话我们就无法同时使用多个插件了。

当遇到这种情况我们可以手动去修改插件源码把它的名字改了，但这种方式是不明智的，假如说你使用的某个插件它的版本更新了，那么你还得再次去修改它的源码，再则随意去修改插件源码对团队来说是混乱不堪的，因此最好的方式应该是由插件自身来解决命名冲突，在jQuery中有一个noConflict方法，这个方法就是用来解决命名冲突的。

jQuery.noConflict

```javascript
var _jQuery = window.jQuery,
	_$ = window.$;
jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}
	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}
	return jQuery;
};
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}
return jQuery;
```

代码中的window是全局的，jQuery是局部的，window.jQuery把全局中的jQuery保存下来，window.$的作用同上，将全局中的jQuery和$保存下来是为了当我们使用jQuery.noConflict方法时好将$和jQuery还原成之前的，因为在没有使用jQuery.noConflict方法前，全局的$和jQuery已经被咱们强大的jQuery给覆盖了，因此如果你不使用jQuery.noConflict方法将无法使用之前的那个插件，那么当我们使用jQuery.noConflict方法后jQuery不就被其他插件给覆盖了吗，插件确实会把jQuery给覆盖，不过在jQuery.noConflict方法中，它最后又将jQuery返回了，因此我们只需要将这个返回的jQuery取一个新的名字就好了。

因此我们可以看出jQuery在解决命名冲突上它是先将插件保存下来，然后使用自己的jQuery将插件覆盖，当调用jQuery.noConflict方法时再将插件放出并将自己返回。

需要注意的是此方法只能解决在jQuery之前导入的插件，因为如果在jQuery之后导入，那么jQuery就已经被覆盖了，自然也就无法使用noConflict方法。

在解决命名冲突方面，当jQuery检查到我们有使用CommonJS时，$和jQuery将不会暴露到window中，具体代码就是下面这句了

```javascript
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}
```

这个noGlobal是从这里传过去的

```javascript
( function( global, factory ) {
	"use strict";
  	// 判断是否有使用CommonJS
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
          	// true：不在window上暴露$和jQuery，因此使用CommonJS后你将无法在全局调用jQuery
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ){
  // 省略
});
```

jQuery.noConflict注释版

```javascript
var
	// 将全局jQuery保存起来
	_jQuery = window.jQuery,
	// 将全局$保存起来
	_$ = window.$;
	// 解决命名冲突 当传递一个true值则会将$和jQuery命名权限都交出
jQuery.noConflict = function( deep ) {
	// 如果现在使用的是jQuery则将$权限交出，给其他插件使用
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}
	// 如果deep为true并且使用的是jQuery则将jQuery命名权限交出，给其他插件使用
	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}
	// 返回jQuery，我们可以去重新命名
	return jQuery;
};

// 暴露jQuery和$标识符
// 关于在全局暴露jQuery的相关讨论：https://github.com/jquery/jquery/pull/557
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}
return jQuery;
} );
```