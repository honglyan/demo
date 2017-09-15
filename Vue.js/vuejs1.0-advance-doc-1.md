## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(10-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-25)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(26-31)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [x] [1.Vue.js简介](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#vuejs简介)
- [x] [2.Vue概述](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#vue概述-)
- [x] [3.组件系统](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#组件系统-)
- [x] [4.Vue.js的实例](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#vuejs的实例-)
- [x] [5.Vue数据绑定-插入值-1](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#插入值)
- [x] [6.Vue数据绑定-插入值-2](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#插入值)
- [x] [7.Vue数据绑定-插入值-3](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#插入值)
- [x] [8.Vue数据绑定-绑定表达式-Javascript](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#绑定表达式)
- [x] [9.Vue数据绑定-绑定表达式-过滤器](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md#绑定表达式)

## 课堂笔记
### Vue.js简介
* 什么是Vue.js？  
   * Vue.js是一个构建数据驱动的web界面的库。技术上，他重点集中在MVVM模式的ViewModel层，易与其他库和项目进行绑定。  
   * Vue.js的目标是通过简单的API实现响应的数据绑定和组合的视图组件.  
   * Vue.js的核心是响应的数据绑定系统，他让数据和DOM保持同步非常简单。
* Vue.js的安装（三种）  
   * 独立版本   
   * CDN  
   * NPM(npm install vue)
* Vue.js的使用  
[简单的实例](https://github.com/honglyan/demo/tree/master/Vue.js/Vue.js1.0%20advance/chapter1)  

### Vue概述  
* Vue.js的概述  
   * Vue.js自身不是一个全能框架-它只聚焦于视图层。  
   * 在与相关工具和支持库一起使用时，也能完美地驱动复杂的单页应用。  
* [一个切换文字颜色的小实例](https://github.com/honglyan/demo/tree/master/Vue.js/Vue.js1.0%20advance/chapter2)  

### 组件系统  
* 让我们用独立可复用的小组件来构建大型应用。  
* 组件树 
* 两大模块：组件系统和响应的数据绑定。  

### Vue.js的实例  
* 构造器  
  * 每个Vue.js应用的起步都是通过构造函数Vue创建个Vue的根实例.var app = new Vue({ //实例 })  
  * 在实例化Vue时，需要传入一个选项对象，它可以包含数据、模型、挂载元素、方法、生命周期钩子等选项。  
* 属性与方法  
  * 被代理的属性是响应的。   
* 实例生命周期  

### Vue数据绑定
#### 模板的说明  
   Vue.js的模板是基于DOM实现的。  
#### 插入值  
   1.数据绑定的最基础的形式是文本插入。 
   ```html 
     <div id="text" class="{{ classValue }}">{{ innnerText }}</div>
   ```
   2.如果需要只处理单次插值，今后数据不再变化  
   ```html
     <div id="text" class="{{* classValue }}">{{ innnerText }}</div>
   ```
   3.原始的html：内容以HTML字符串插入时，数据绑定将被忽略。如果需要复用模板片段，应该使用partials。
   ```html
     <div id="text" class="{{* classValue }}">{{{ innerHTML }}}</div>
   ```
   4.在Vue.js指令和特殊特性内不能用插值。  
#### 绑定表达式  
  1.JavaScript表达式  
   ①Vue.js在数据绑定内支持全功能的JavaScript表达式。  
   ②表达式将在所属的Vue实例的作用域内计算。每个绑定只能包含单个表达式。 
   ```html
    <div id="text" class="{{* classValue }}">
      姓名：{{ name }}<br>
      年龄：{{ age+1 }}
     </div>
       {{ var a =1 }} (x)  
       {{ if(ok) {return message } }} (x)  
   ```
       
   2.过滤器。  
   ①Vue.js允许在表达式后添加可选的“过滤器Filter”。管道语法不是JavaScript语法，因此不能再表达式内使用过滤器，只能添加到表达式的后面。  
   ```html
<div id="text" class="{{* classValue }}">
      姓名：{{ name | uppercase }}<br> //uppercase是vue内置的过滤器
      年龄：{{ age+1 }}
     </div>
   ```  
   ②过滤器可以串联。  {{ massage | filterA | filterB }}  
   ③过滤器也可以接收参数。 {{ message | filterA'arg1' arg2 }}  
   


       
       
        


   




  
  
  
