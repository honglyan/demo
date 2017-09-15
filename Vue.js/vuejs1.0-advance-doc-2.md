## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(10-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-25)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(26-32)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [x] [10.Vue数据绑定-指令-概念](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [x] [11.Vue数据绑定-指令-参数](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [x] [12.Vue数据绑定-指令-修饰符](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [x] [13.Vue数据绑定-缩写](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#缩写)
- [x] [14.Vue计算属性-基础例子](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#基础例子在这里我们声明一个计算属性b我们提供的函数将用作属性vmb的getter像绑定普通属性一样在模板中绑定计算属性)
- [x] [15.Vue计算属性-计算属性](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#计算属性-vs-watch用于观察vue实例上的数据变动)
- [x] [16.Vue计算属性-计算setter](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#计算setter计算属性默认只是getter不过在需要时也可以提供一个setter)

## 课程笔记  
### 指令
##### 1.指令：是特殊的带有前缀v-的特性。
```html
<div id="test">
    请选择展示形式：
    <input type="radio" id="one" value="true" v-model="display" name="sel">
    <label for="one">显示</label> &nbsp; &nbsp;
    <input type="radio" id="two" value="" v-model="display" name="sel">
    <label for="two">隐藏</label>
    <div id="text" class="{{ classValue }}" v-if="display">{{ innnerText }}</div>
  </div>
        //display是字符串，只要有值就为真，如果没有值才为假。
```
##### 2.参数：有些指令可以在其名称后面带一个“参数”，中间放一个冒号隔开。 
```html
<a v-bind:href="url"></a>
<a v-on:click="doSomething"></a>
```
##### 3.修饰符：是以半角句号开始的特殊后缀，用于表示指令应以特殊方式绑定。
```html
<a v-bind:href.literal="a/b/c"></a> //原样输出
//一旦有参数和修饰符同时在的时候，先参数后修饰符。
```
### 缩写
##### v-bind
```html
//完整语法
<a v-bind:href="url"></a>
//缩写
<a :href="url"></a>
```
##### v-on  
```html
//完整语法
<a v-on:click="doSomething"></a>
//缩写
<a @click="doSomething"></a>
```

### Vue计算属性(适用于多于一个表达式的逻辑)
#### 基础例子:在这里我们声明一个计算属性b，我们提供的函数将用作属性vm.b的getter，像绑定普通属性一样在模板中绑定计算属性。
```html
  <script type="text/javascript">
  window.onload = function(){
    var vm = new Vue({
      el : '#example',
      data : {
        a : 1
      },
      computed:{
        b: function(){
          return this.a+1;
        }
      }
    });
    setTimeout(function(){
      vm.a = 2;
    },5000);

  };

  </script>
</head>
<body>
  <div id="example">
    a={{ a }},b={{ b }}
  </div>
</body>
```
#### 计算属性 vs $watch(用于观察Vue实例上的数据变动)
```html
  <script type="text/javascript">
  window.onload = function(){
  //   //$ watch 方法
  //   var vm = new Vue({
  //     el : '#demo',
  //     data : {
  //       firstName : 'Foo',
  //       lastName : 'Bar',
  //       fullName : 'Foo Bar'
  //     }
  //   });
  //  vm.$watch('firstName',function(val){
  //    this.fullName = val + ' ' + this.lastName;
  //  });
  //  vm.$watch('lastName',function(val){
  //    this.fullName = this.lastName + ' ' + val;
  //  });
    // 计算属性
    var vm = new Vue({
        el : '#demo',
        data : {
          firstName : 'Foo',
          lastName : 'Bar'
        },
        computed:{
          fullName: function(){
            return this.firstName+ ' ' +this.lastName;
          }
        }
      });
  };
  </script>
</head>
<body>
  <div id="demo">
    {{ fullName }}
  </div>
</body>
```

#### 计算setter：计算属性默认只是getter，不过在需要时也可以提供一个setter。
```html
<script type="text/javascript">
  window.onload = function(){
    var vm = new Vue({
        el : '#demo',
        data : {
          firstName : 'Foo',
          lastName : 'Bar'
        },
        computed:{
          fullName: {
            //getter
            get: function(){
              return this.firstName+ ' ' +this.lastName;
            },
            //setter
            set:function(newValue){
              var names = newValue.split(' ');
              this.firstName = names[0];
              this.lastName = names[names.length-1];
            }
          }
        }
      });
      setTimeout(function(){
        vm.fullName = 'Edogawa Conan';
      },5000);
  };
  </script>
</head>
<body>
  <div id="demo">
    {{ fullName }}
  </div>
</body>
```


