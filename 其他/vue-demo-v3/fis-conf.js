fis.unhook('components');
fis.hook('node_modules');

//commonjs模块化支持
fis.hook('commonjs', {
  baseUrl: '.',
  extList: ['.js', '.ts', '.vue', '.jsx', '.es']
});
//fis3-hook-module
fis.hook('module', {
  mode: 'amd' // 模块化支持 amd 规范，适应 require.js
});
fis.match('/{node_modules,lib}/**.js', {
  isMod: true,
  useSameNameRequire: true
});
/**
 * babel es6=>es5
 */
fis.match('/src/**.js', {
    parser: fis.plugin('babel-6.x',{}),
    rExt: 'js'
});
/**
 * 添加css和image模块化加载支持
 * import 'font-awesome.css' 或 require('font-awesome.css')
 */
fis.match('**.{js,jsx,ts,es6,vue}', {
    preprocessor: [
        fis.plugin('js-require-css'),
        fis.plugin('js-require-file', {
            useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
        })
    ]
});
/*vue*/
fis.match('src/**.vue', {
  isMod: true,
  rExt: 'js',
  useSameNameRequire: true,
  parser: [
    fis.plugin('vue-component', {
      // vue@2.x runtimeOnly
      runtimeOnly: true,          // vue@2.x 有runtimeOnly模式，为true时，template会在构建时转为render方法

      // styleNameJoin
      styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css`

      extractCSS: true,           // 是否将css生成新的文件, 如果为false, 则会内联到js中

      // css scoped
      cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj
      cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5`
      cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效

      cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空
    }),
    fis.plugin('babel-6.x')
  ],
});
/**
 * common/lib下资源不做解析
 */
fis.match('/common/lib/**.js', {
    parser: null,
    isMod: false
});
// widget 目录下为组件
fis.match('/src/{widget,routes}/**.js', {
  isMod: true
});
/**
 * loader分析依赖并自动引入资源。
 */
fis.match('::package', {
    postpackager: fis.plugin('loader',{
      allInOne: true
    }),
    packager: fis.plugin('map')
});
// 自动添加amd
fis.config.merge({
    settings : {
        postprocessor : {
            jswrapper : {
                type : 'amd',
                wrapAll : true
            }
        }
    }
});
// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});