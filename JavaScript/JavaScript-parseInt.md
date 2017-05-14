### JavaScript-parseInt

大家知道javascript中的parseInt函数在转换“01”---“09”的时候有什么不同吗
如果你试了一下会发现parseInt("01")---parseInt("07")都能正确转换，但是parseInt("08")和parseInt("09")都是0

下面这个会显示1：
document.write(parseInt(0.0000001));

这是由于超过一定精度js就会用科学计数法记录数字，例如：
document.write(0.0000001);
会得到1e-7，而parseInt会自动把参数转换成字符串的，那实际上就是：
s = (0.0000001).toString();
document.write(parseInt(s));
最后得到1就不奇怪了。

parseInt是API设计的一个教训。原初设计者想把parseInt设计得能聪明一点儿，自动识别进制，没想到结果造成了这种下场。实际上parseInt最合理的方式就是只有一个参数时，始终按10进制处理。

我也遇到了这个问题，不过我用parseFloat()解决了。