## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(10-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-24)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(25-32)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [x] [10.指令-概念](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [x] [11.指令-参数](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [x] [12.指令-修饰符](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [ ] [13.缩写]()
- [ ] [14.]()
- [ ] [15.]()
- [ ] [16. ]()

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

