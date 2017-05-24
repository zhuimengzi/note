## JavaScript 获取两个字符串最长公共子串长度

前些天一位朋友发我一道面试题，这道面试题是关于计算出两段字符串的最大公共字符长度。

我是这样想的，既然是公共字符那么我就可以将某段字符拿到另一段字符中去查找，思路就是下面这张图

![公共字符查找过程](C:\Users\Administrator.USER-04UI4P5IFT\Desktop\公共字符查找过程.png)

假如字符是javascript和www.javascript.com

查找规则步骤：

www.javascript.com在javascript中吗？no？

www.javascript.co在javascript中吗？no？

www.javascript.c在javascript中吗？no？

如此反复......

ww.javascript.com在javascript中吗？no？

ww.javascript.co在javascript中吗？no？

如此反复.....

大概就是以上这个步骤，但是以上步骤在查找的过程中会出现一个问题，假如有这么两段字符www和wcomwww，按照以上的做法获取到的最长公共字符长度就是1，因为字符wcomwww在匹配w的时候就给匹配上了，因此我们还得判断它是不是最大公共字符，具体做法如下：

```javascript
function getMaxCommonNum(str1,str2){
  var left,
      right,
      len = 0,
      max = 0,
      i = 0,
      j = 0,
      temp,
      tempLen = 0;
  // 拿少的那一部分到多的那一部分中查找
  if(str1.length > str2.length){
    left = str1;
    right = str2;
  }else{
    left = str2;
    right = str1;
  }

  len = left.length;

  for(;i < len;i++){
    for(j = len;j > 0;j--){
      temp = right.substring(i,j);
      if(left.indexOf(temp) != -1){
        tempLen = temp.length;
        if(tempLen > max){
          max = tempLen;
        }
      }
    }
  }
  return max;
}
console.log(getMaxCommonNum('javascript','wscriptww.123.omt'));
```
虽然以上代码确实可以满足题目的要求，但是上面的代码为了找到最大公共字符进行了太多不必要的循环。