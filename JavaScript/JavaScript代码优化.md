### javascript代码优化

```javascript
t="asfasf"
+"asfwfw"
+"asf<p>"
document.write(t)

//上面的可以写成下面简化的样式

t="asfasf\
asfwfw\
asf<p>"

//for in  有时候不是按顺序来的  会超成错误
//x<a.length 每次循环的时候都取一次a.length，当然会慢
//这个是比较好的方法
for(var x=0,l=a.length;x<l;x++){
     alert(a[x])
}

for(var i=0;i<6;i++,alert("a"))

```

