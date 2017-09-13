## 笔记列表
* [某学院Vue.js课程(1-9)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-1.md)  
* [某学院Vue.js课程(9-16)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md)  
* [某学院Vue.js课程(17-24)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-3.md)
* [某学院Vue.js课程(25-32)](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-4.md)


## 课程任务
- [ ] [9.指令](https://github.com/honglyan/demo/blob/master/Vue.js/vuejs1.0-advance-doc-2.md#指令)
- [ ] 10.
- [ ] 11.
- [ ] 12.
- [ ] 13.
- [ ] 14.
- [ ] 15.
- [ ] 16.  

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
