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


