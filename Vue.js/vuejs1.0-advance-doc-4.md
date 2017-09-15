## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(10-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-25)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(26-31)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [x] 26.Vue列表渲染-v-for
- [ ] 27.Vue列表渲染-template
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

