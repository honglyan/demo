# Vue 基础视频教程（1.0版本）

## 课程任务：
- [x] [1.Vuejs的数据双向绑定](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#1vuejs的数据双向绑定)
- [x] [2.简单好用的v-show](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#2数据双向绑定v-model) 
- [x] [3.Vuejs的事件处理](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#3简单好用的v-show)
- [x] [4.初探Vuejs组件化开发](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#4初探vuejs组件化开发v-on)
- [x] [5.Vuejs开发的两个彩蛋](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#5vuejs中两个小小的彩蛋-不适用minjs)
- [x] [6.computed的应用场景](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#6computed的应用场景)
- [x] [7.Vuejs处理列表数据](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#7vuejs处理列表数据)
- [ ] [8.Vuejs组件化开发todo应用](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#8vuejs组件化开发todo应用)
- [ ] [9.添加任务总数和删除任务](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#9添加任务总数和删除任务)
- [ ] [10.结合Jquery 实现 Vuejs Ajax](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#10结合jquery-实现-vuejs-ajax)
- [ ] [11.Vue resource 插件使用 ](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#11vue-resource-插件使用)
- [ ] [12.Vue resource 插件稍微深入](https://github.com/honglyan/demo/blob/master/Vue.js/Vue%20js1.0-basic-doc.md#12vue-resource-插件稍微深入)

## 内容：
### 1.Vuejs的数据双向绑定
#####  入门：显示一个Hello World !
```html
   <div id="app">
     <h1>{{ message }}</h1>
   </div>
   <script src="https://cdn.bootcss.com/vue/1.0.27/vue.min.js"></script>
   <script>
     new Vue({
       el: '#app', //需要绑定的div的id
       data: {
         message: "Hello World !"  
       }
     });
   </script>
```
### 2.数据双向绑定v-model
###### 一般使用在表单数据当中，比如input和select。
在以上的基础上进行数据双向绑定,代码如下：
```html
<div id="app">
     <h1>{{ message }}</h1>
     <input type="text" v-model="message">
   </div>
   <script src="https://cdn.bootcss.com/vue/1.0.27/vue.min.js"></script>
   <script>
     new Vue({
       el: '#app',
       data: {
         message: "Hello World !"
       }
     });
   </script>
```  
这时候随着input里面的文字的变化上面显示的也会随之变化。  
注:这个input必须写在这个id为app的div的里面。

要想显示data的值的话，在div中写入：
```html
<pre>{{ $data | json }}</pre>
```
这是将data转化为json显示出来。

### 3.简单好用的v-show 
```html
<div id="app">
     <form action="">
       <div class="error" v-show="!message">
         you must enter a message to submit.
       </div>
       <textarea v-model="message"></textarea>
       <button v-show="message"> Submit message</button>
       <pre>{{ $data | json }}</pre>
     </form>
   </div>

   <script src="https://cdn.bootcss.com/vue/1.0.27/vue.min.js"></script>
   <script>
     new Vue({
       el: '#app',
       data: {
         message: ""
       }
     });
   </script>
```
当然使用v-if也可以达到输入框中没有数据隐藏错误error的作用：
```html
<div class="error" v-if="!message">
         you must enter a message to submit.
       </div>
```
区别：v-show是不需要的时候隐藏该div，display为none，但是使用v-if的话是在整个dom里面都没有这个div。
v-if和v-show后面填写简单的判断语句。

### 4.初探Vuejs组件化开发(v-on)
###### 类似jquery中click之类的事件,method中存放需要执行的函数逻辑。
```html
<div id="app">
     <form action="demo.html" v-on:submit="submitForm">
       <button type="submit" > Submit</button>
       <pre>{{ $data | json }}</pre>
     </form>
   </div>

   <script src="https://cdn.bootcss.com/vue/1.0.27/vue.min.js"></script>
   <script>
     new Vue({
       el: '#app',
       methods:{
        submitForm: function(){
          alert("ok");
        }
       }
     });
   </script>
```
上面的代码执行后会跳转到demo.html页面去，如果你不想跳转，直接将代码改成如下即可：
```html
 <form action="demo.html" v-on:submit.prevent="submitForm">
       <button type="submit" > Submit</button>
     </form>

```
这样代码会较长，这时候可以用@来代替v-on:
```html
<form action="demo.html" @submit.prevent="submitForm">
       <button type="submit" > Submit</button>
     </form>
```
#### 实例1：按钮，每按一下增加一次
在这里我么来写一个button，点击一下就会+1
```html
<div id="app">
       <button type="submit" @click="updateCount"> Submit{{ count }}</button>
   </div>

   <script src="https://cdn.bootcss.com/vue/1.0.27/vue.min.js"></script>
   <script>
     new Vue({
       el: '#app',
       data: {
         count: 0
       },
       methods:{
        updateCount : function(){
          this.count += 1;
        }
       }
     });
   </script>
```
为了减少代码量，如此简单的函数完全没有必要写一个函数来实现，所以可以如下：
```html
<button type="submit" @click="count += 1 "> Submit{{ count }}</button>
```

#### 实例2：两个按钮，实现点击第一个第一个按钮的数字会增加，点击第二个按钮第二个按钮的数字会增加，类似微博的点赞和不赞同的按钮
```html
<div id="app">
       <counter heading="likes" color="green"></counter>
       <counter heading="dislikes" color="red"></counter>
   </div>
   <template id="counter-template">
     <h1>{{ heading }}</h1>
     <button @click="count += 1 " style="background:{{ color }}">like {{ count }}</button>

   </template>

   <script src="https://cdn.bootcss.com/vue/1.0.27/vue.min.js"></script>
   <script>
     Vue.component('counter',{
       template:'#counter-template', // counter里面的内容
       props:['heading','color'], //绑定参数
       data : function(){
         return {count: 0};
       }
     });
     new Vue({
       el: '#app'
     });
   </script>

```

### 5.vue.js中两个小小的彩蛋 //不适用min.js
#### 1.在服务器中在查看元素的时候Vue Devtools可以查看内容

### 6.computed的应用场景
#### 实例1.显示一个人的等级
```html
<div id="app">
       level {{ level }}
 </div>
 <script>
    new Vue({
      el: '#app',
      data:{
        points : 200 ,
      },
      computed:{
        level:function(){
          if(this.points <= 100){
            return '普通会员';
          }
          return 'VIP会员';
        }
      }

    });
```
#### 实例2.实时更新来显示姓名 
```html
<div id="app">
       {{ username }}
       <input type="text" v-model="first">
      <input type="text" v-model="last">
   </div>
     <script>
    new Vue({
      el: '#app',
      data:{
        first : 'hong' ,
        last : 'lyan'
      },
      computed:{
        username:function(){
          return this.first+this.last;
        }
      }

    });
  </script>
```
### 7.Vuejs处理列表数据
#### 实例1：循环输出一个列表  
```html
<div id="app">
     <ul>
       <li v-for="task in tasks" :class="task.completed?'completed':''"> {{ task.body }}</li>
     </ul>
   <script>
   new Vue({
      el: '#app',
      data:{
        tasks : [
          {body:'go to movies',completed:false},
          {body:'learn vue.js',completed:true},
          {body:'go to shop',completed:false}
        ]
      }
    });
   </script>
```
  
PS: 添加多个class可以用以下方法：
```html
<li v-for="task in tasks" :class="completed"> </li>
<script>
    new Vue({
      el: '#app',
      data:{
        completed : ['completed','turely']
    });
  </script>
```

### 实例2.点击切换事件状态
```html
<div id="app">
     <ul>
       <li v-for="task in tasks" :class="{'completed':task.completed}" @click="toggleTask(task)"> {{ task.body }}</li>
     </ul>
   </div>
  <!--<script src="vue.min.js"></script> -->
  <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      data:{
        tasks : [
          {body:'go to movies',completed:false},
          {body:'learn vue.js',completed:true},
          {body:'go to shop',completed:false}
        ]
      },
      methods :{
        toggleTask : function(task){
          task.completed = ! task.completed;
        }
      }

    });
  </script>
```
### 8.Vuejs组件化开发todo应用
### 9.添加任务总数和删除任务
### 10.结合Jquery 实现 Vuejs Ajax
### 11.Vue resource 插件使用 
### 12.Vue resource 插件稍微深入
