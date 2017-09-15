## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(10-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-24)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(25-31)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [x] [17.Vue.js类与样式绑定-绑定 HTML Class-对象语法](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md#对象语法-1)
- [x] [18.Vue.js类与样式绑定-绑定 HTML Class-数组语法](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md#数组语法)
- [x] [19.Vue.js类与样式绑定-绑定内联样式style-对象语法](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md#对象语法-1)
- [x] [20.Vue.js类与样式绑定-绑定内联样式style-数组语法](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md#数组语法-1)
- [ ] 21.
- [ ] 22.
- [ ] 23.
- [ ] 24.

## 课程笔记
### Vue.js类与样式绑定
  数据绑定一个常见需求是操作元素的class列表和他的内联样式。v-bind用于class和style时，表达式的结果类型除了字符串之外，还可以是对象或数组。  
  #### 绑定 HTML Class  
  ##### 对象语法  
  1.v-bind:class指令可以与普通的class特性共存.  
  *例：一个文字原本只有red的class，在5秒之后变成blue。*
  ```html
  <script type="text/javascript">
  window.onload = function(){
    var dataList = {
      innerText: '欢迎来到麦子学院！',
      isred: true,
      isblue: false
    }
     new Vue({
      el: '#example',
      data: dataList
    });
    setTimeout(function(){
      dataList.isred = false;
      dataList.isblue = true;
    },5000);
  };
  </script>
</head>
<body>
  <div id="example" v-bind:class="{'red':isred,'blue':isblue}">
    {{ innerText }}
  </div>
</body>
```
  2.也可以直接绑定数据里的一个对象。  
  *例：*  
  ```html
  <script type="text/javascript">
  window.onload = function(){
    var dataList = {
      innerText: '欢迎来到麦子学院！',
      classObject: {
        'red': true,
        'blue': false
      }
    }
     new Vue({
      el: '#example',
      data: dataList
    });
    setTimeout(function(){
      dataList.classObject = {
        'red': false,
        'blue': true
      };
    },5000);
  };
  </script>
</head>
<body>
  <div id="example" v-bind:class="classObject">
    {{ innerText }}
  </div>
</body>
  ```  
  ##### 数组语法
  1.把一个数组传给v-bind：class，以应用一个class列表。  
  ```html
<script type="text/javascript">
  window.onload = function(){
    var dataList = {
      innerText: '欢迎来到麦子学院！',
      classRed: 'red',
      classBlue: 'blue'
    }
     new Vue({
      el: '#example',
      data: dataList
    });
  };
  </script>
</head>
<body>
  <div id="example" v-bind:class="[classBlue]">
    {{ innerText }}
  </div>
</body>
  ```  
  2.根据条件切换列表中的class，可以用三元表达式.  
  ```html
<script type="text/javascript">
  window.onload = function(){
    var dataList = {
      innerText: '欢迎来到麦子学院！',
      isA: true
    }
     new Vue({
      el: '#example',
      data: dataList
    });
    setTimeout(function(){
      dataList.isA = false;
    },5000);
  };
  </script>
</head>
<body>
  <div id="example" v-bind:class="[isA?'red':'blue']">
    {{ innerText }}
  </div>
  //也可以这样子写：
  <div id="example" v-bind:class="'static',{'red':isred,'blue':isblue}">
    {{ innerText }}
  </div>
</body>
  ```  
  #### 绑定内联样式  
  ##### 对象语法  
  CSS属性名可以用驼峰式或者短横分隔命名。  
  ```html
<script type="text/javascript">
  window.onload = function(){
    var dataList = {
      innerText: '欢迎来到麦子学院！',
      activeColor: 'red',
      fontStyle: 'italic'
    };
     new Vue({
      el: '#example',
      data: dataList
    });
  };
  </script>
</head>
<body>
  <div id="example" v-bind:style="{color:activeColor, fontStyle:fontStyle}">
    {{ innerText }}
  </div>
</body>
  ```  
  ##### 数组语法  
  1.V-bind：style的数组语法可以将多个样式对象应用在一个元素上。  
  ```html
  <div v-bind:style="[styleObjectA,styleObjectB]">
  ```  
  ##### 自动添加前缀  
  Vue.js会自动侦测并添加相应前缀。
