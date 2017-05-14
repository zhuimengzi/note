### JavaScript语句后面的分号

 ##### JavaScript自动加分号规则

1. 当有换行符（包括含有换行符的多行注释），并且下一个token没法跟前面的语法匹配时，会自动补分号。
2. 当有}时，如果缺少分号，会补分号
3. 当程序源代码结束时，如果缺少分号，会补分号
4. 在return、break、continue、后自增、后自减五种语句中，换行符可以完全替代分号的作用。
5. var if do while for continue break return with switch throw try debugger几种关键字开头的语句，以及空语句，上一行加不加分号影响不大。 
6. 凡表达式语句和函数表达式语句，后面不加分号非常危险，情况极其复杂。
7. 凡(和[开头的语句，前面不加分号极度危险。

