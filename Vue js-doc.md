# Vue.js的学习
## 数据双向绑定
### 入门：显示一个Hello World !
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
