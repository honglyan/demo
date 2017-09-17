## 课程目录 
- [x] [1.课程简介](https://github.com/honglyan/demo/blob/master/Vue.js/Vue.js2.0-1.md)
- [ ] 2. Vue简介
- [ ] 3.功能接口（1）
- [ ] 4.功能接口（2）
- [ ] 5.环境搭建和常用插件
- [ ] 6.项目实践-首页
- [ ] 7.项目实践-购买详情页、订单列表
- [ ] 8.项目实践-购买详情页、订单列表  

## Vue.js2.0基础与实践  
### Vue实例对象  
```js
new Vue({  //构造函数
  //构造参数
  el: '#app',  //一个对象装载的位置，
  template : ' <div><other-compont></div>', //Html代码，包含其他组件的代码
  data: {  //数据
    message: 'Hello World!'  //参数选项
  },
  components：{ App } //引入其他组件
})
```
### 引入组件  
```html
//实例化组件 全局注册my-header
  Vue.component('my-header',{
    template: "<p>this is my header</p>"
  });
//引用组件  
<div id="app">
    <my-header></my-header>
    hello
  </div>
```
当不需要全局注册（即需要包含多个组件的时候，可以采用以下方法）:

```js
var MyHeaderChild = {
    template: "<p>i am myheaderchild.</p>"
  }
  var MyHeader = {
    template: "<p><my-header-child></my-header-child>this is my header</p>",
    components: {
      'my-header-child': MyHeaderChild
    }
  }
  new Vue({
    el: '#app',
    data: {
      message : 'honglyan'
    },
    components:{
      'my-header':MyHeader
    }
  });
```
