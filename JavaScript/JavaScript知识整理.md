## JavaScript知识整理

```javascript
function escapeHtml(str){
            const key = {
                ">":"&gt;",
                "<":"&lt;",
                "&":"&amp;"
            };
            return str.replace(eval('/['+Object.keys(key).join("|")+']/g'),function($1){
                return key[$1];
            });
        }
```

选择有时比操作更好。

a++

```javascript
var a = 10;
a++ //10
a //11
```

用textContent获取元素文本

```javascript
var str = "<div>这里是div<p>里面的段落</p></div>";
var d = document.createElement("div");
d.innerHTML = str; //"<div>这里是div<p>里面的段落</p></div>"
d.textContent //"这里是div里面的段落"
```

JS直接操作属性，只能是那些在DOM中已经提供的属性，否则当成是在操作JS对象，除非使用setAttribute