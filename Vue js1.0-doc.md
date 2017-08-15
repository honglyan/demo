# Vue.js的学习

## 入门：显示一个Hello World !
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
## 数据双向绑定v-model
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

## 简单好用的v-show 
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

## 事件系统  v-on
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
### 实例：按钮，每按一下增加一次
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
## 初探Vuejs组件化开发（为了实现代码的重用）
### 实例：两个按钮，实现点击第一个第一个按钮的数字会增加，点击第二个按钮第二个按钮的数字会增加，类似微博的点赞和不赞同的按钮
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




