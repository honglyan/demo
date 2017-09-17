## 课程目录 
- [x] [1.课程简介](https://github.com/honglyan/demo/blob/master/Vue.js/Vue.js2.0-1.md)
- [x] [2. Vue简介]()
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
注意：组件里面的data最好采用：

```js
data: function(){
      message : 'honglyan'
    }
```
避免直接用data：{}。

### vue基本概念  
#### 全局api/Global API  
例：Vue.delete/Vue.filter/Vue.component/Vue.use/Vue.extend
#### 实例选项  
在创建Vue实例的时候可以选择的一些对象或者方法。
例：el/data/template/component/render
#### 实例属性/方法  Instance Properties
$on:绑定一个方法去执行。
```js
vm.$on('emit',function(){})
vm.$data
vm.$refs
vm.$childrens
```
#### 指令 Directive
是写在模板里面，通过模板与组件的数据进行交互的重要的一个方法。  
例：v-html/v-on:keydown.enter
v-on：将一个事件绑定到元素上。

#### 内置组件 Built-in Component 
不需要声明组件componet/keep alive。
```
