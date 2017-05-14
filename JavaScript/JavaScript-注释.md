### JavaScript-注释

<!--与//-->的出现原本是为了在不支持script标签的浏览器中避免代码显示出来,可现在不支持script标签的浏览器都没人用了.那<!--与//-->还有什么用?看下面

```javascript
<script language="JavaScript">
alert('<script language="JavaScript">alert(666);</script>');
</script>
```

上边代码是错误的对吧,但加上那<!--与//-->错误就没有了

```javascript
<script language="JavaScript">
<!--
alert('<script language="JavaScript">alert(666);</script>');
//-->
</script>
```

那是因为网页解析到"</script>"，以为是脚本结束了，加上转义符就可以了

```javascript
<script language="JavaScript">
alert('<script language="JavaScript">alert(666);<\/script>');
</script>
```

我的意思是加了<!--与//-->就不用转义了