# Markdown

Markdown 是一种轻量级标记语言，创始人为約翰·格魯伯（John Gruber）。 它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。

John Gruber 在 2004 年创造了 Markdown 语言，在语法上有很大一部分是跟 Aaron Swartz 共同合作的。这个语言的目的是希望大家使用“易于阅读、易于撰写的纯文字格式，并选择性的转换成有效的 XHTML (或是HTML)”。 其中最重要的设计是可读性，也就是说这个语言应该要能直接在字面上的被阅读，而不用被一些格式化指令标记 (像是 RTF 与 HTML)。 因此，它是现行电子邮件标记格式的惯例，虽然它也借镜了很多早期的标记语言，如：setext、Texile、reStructuredText。 许多网站都使用 Markdown 或是其变种，例如：GitHub、reddit、Diaspora、Stack Exchange、OpenStreetMap 与 SourceForge 让用户更利于讨论。

## 标题(#号和文字之间有空格)
>-# 一级标题  
 ## 二级标题  
 ### 三级标题  
 #### 四级标题  
 ##### 五级标题  
 ###### 六级标题  

#### 效果
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题


*THIS IS A GOOD JOB!*  

_THIS IS A GOOD JOB!_  

**THIS IS A GOOD JOB!**
——THIS IS A GOOD JOB!——
~~THIS IS A GOOD JOB!~~
_THIS ~~IS~~ A **GOOD** JOB!_
- one
- two
- three
* four
1. one
1. two
1. three
3. Open a pull request
  * Describe my changes
  * Mention all the members of my team
    * Ask for feedback
- [x] orange
- [ ] apple
- [ ] banana

> 我喜欢安静且热闹的俗世的光阴，可以听一朵花悄悄开放的声音，也愿意看着她铺天盖地盛开；可以快乐地行走在熙熙攘攘的人群中，也可以在一茶一书中静坐，于盐米油盐，酸甜苦辣中努力地做好自己。这样的时光是踏实的、柔软的。
>> 我喜欢安静且热闹的俗世的光阴，可以听一朵花悄悄开放的声音，

image
![image of 83e953190774fd8808990&690](http://s1.sinaimg.cn/middle/83e953190774fd8808990&690)
```c
#include <stdio.h>
int main(void){
printf("hello world!");
return 0;
}
```
