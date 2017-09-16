## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(10-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-25)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(26-31)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [x] 26.Vue列表渲染-v-for
- [x] 27.Vue列表渲染-template
- [ ] 28.Vue列表渲染-数组变动检测
- [ ] 29.Vue列表渲染-对象v-for
- [ ] 30.Vue列表渲染-值域v-for
- [ ] 31.Vue列表渲染-显示过滤/排序的结果

## 课程笔记  
### Vue列表渲染
#### v-for  
1.基于一个数组渲染一个列表。  
```html
<script type="text/javascript">
  window.onload = function(){
    var dataList = {
      innerText: ['欢迎来到麦子学院！','大家好']
    }
     new Vue({
      el: '#example',
      data: dataList
    });
  </script>
</head>
<body>
  <div id="example" >
    <span v-for="text in innerText">{{ text }}<br></span>
  </div>
</body>
```  
2.在V-for块内能访问父组件作用域内的属性以及数组索引$index.  
```html
var dataList = {
      innerTitle: '洪玲燕',
      innerText: ['欢迎来到麦子学院！','大家好'],
      display: true,
    }
<div id="example" >
    <span v-for="text in innerText">{{innerTitle}}-{{ $index }}-{{ text }}<br></span>
  </div>
```

#### template v-for  
可以将v-for用在<template>标签上，以渲染一个包含多个元素的块。  
  ```html
  <template v-for="text in innerText">
       <h5>name:{{innerTitle}}</h5>
      <h6>no：{{ $index }}</h6>
      <h4>brief: {{ text }}</h4>
    </template>
  ```  
  #### 数组变动检测  
  ##### 1.变异方法  
  1. push()/pop():增加一个元素/删除一个元素.  
  2. shift()/unshift():控制数组元素。  
  3. splice():根据下标指定删除某个元素。  
  4. sort()/reverse:排序/反向排序。  
  ##### 2.替换数组:不会修改数组而是返回一个新数组的非变异方法，直接用新数组替换旧数组。  
  1.filter():过滤数组。  
  ```html
  demo.items = example.items.filter(function(item){
    return item.message.match(/Foo/);  //js的数学运算
  });
  ```  
  2.concat:拼接数组。  
  3.slice:数组操作。  
  ##### 3.track-by：用全新的对象替换数组。  
  ```html
  <div v-for="item in items" track-by="_uid">
      <!-- content -->
  </div>
  ```  
  ##### 4.track-by $index  
  1.使用track-by="$index"强制让v-for进入原位更新模式。  
  2.片短不会被移动，而是简单地以对应索引的新值刷新。  
  3.DOM节点不再映射数组元素顺序的改变，不能同步临时状态以及组件的私有状态。  
  ##### 5.问题。  
  因为JavaScript的限制，vue.js不能检测到下面数组的变化：  
  ①直接用索引设置元素，如vm.item[0] ={};  
  解决方法：Vue扩展了观察数组，为他添加了一个$set方法：  
  ```html
  demo.items.$set(0,{chidMsg:'changed!'})
  ```
  ②修改数据的长度，如vm.items.length = 0;  
  解决办法：需要一个空数组替换items。  
  除了$set()，vue.js还未观察数组添加了splice()方法，通过下标删除元素。  
  ```html
  this.items.$remove(item);
  ```  
  #### 对象v-for  ($index,$key)  
  ```html
  var dataList = {
      innerText :{
        Firstname : 'hong',
        Lastname : 'lyan',
        Sex : 'girl',
        Age :20
      }
    }
  <span v-for="value in innerText">{{$key}}-{{ value }}<br></span>
  ```  
  #### 值域v-for  
  v-for也可以接收一个整数，此时它将重复模板数次。  
  ```html
  <span v-for="number in 10">{{ number }}<br></span>
  ```  
  #### 显示过滤/排序的结果  
  想要显示过滤/排序过的数组，同时不实际修改或重置原始数据，有两个办法:  
  1.创建一个计算属性，返回过滤/排序过的数组；  
  2.使用内置的过滤器filterBy和orderBy。  
  ```html
  <div v-for="item in items | filterBy 'hello'">
  ```
  计算属性有更好的控制力，也更灵活，因为它是全功能JavaScript.但是统统过滤器更方便。  
  

