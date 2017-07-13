[node.js](http://www.cnblogs.com/zhongweiv/p/nodejs_module.html)


## 模块
通过Node.js的官方API可以看到Node.js本身提供了很多核心模块 http://nodejs.org/api/ ，这些核心模块被编译成二进制文件，可以require('模块名')去获取；核心模块具有最高的加载优先级（有模块与核心模块同名时会体现）  
（本次主要说自定义模块） 
Node.js还有一类模块为文件模块，可以是JavaScript代码文件（.js作为文件后缀）、也可以是JSON格式文本文件（.json作为文件后缀）、还可以是编辑过的C/C++文件（.node作为文件后缀）；  
文件模块访问方式通过require('/文件名.后缀')    require('./文件名.后缀')    requrie('../文件名.后缀') 去访问，文件后缀可以省略；以"/"开头是以绝对路径去加载，以"./"开头和以"../"开头表示以相对路径加载，而以"./"开头表示同级目录下文件，   
```js
var outputVal  = 0;     //输出值
var increment = 1;    //增量

/* 设置输出值 */
function seOutputVal (val) {
    outputVal = val;
}

/* 设置增量 */
function setIncrement(incrementVal){
    increment = incrementVal;
}

/* 输出 */
function printNextCount()
{    
    outputVal += increment;
    console.log(outputVal) ;
}

function printOutputVal() {
    console.log(outputVal);
}
exports.seOutputVal = seOutputVal;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;
```
调用方法:
```js
/*
    一个Node.js文件就是一个模块，这个文件可能是Javascript代码、JSON或者编译过的C/C++扩展。
    重要的两个对象：
    require是从外部获取模块
    exports是把模块接口公开    
*/
var counter = require('./1_modules_custom_counter');

console.log('第一次调用模块[1_modules_custom_counter]');

counter.seOutputVal(10);               //设置从10开始计数
counter.setIncrement (10);             //设置增量为10

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

/*
    require多次调用同一模块不会重复加载
*/
var counter = require('./1_modules_custom_counter');

console.log('第二次调用模块[1_modules_custom_counter]');
counter.printNextCount();
```
>> module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是module.exports而不是exports。 
所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。
如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。
虽然结果不会报错，如果这么用开发中难免会有一些问题存在，所以

1.最好别分别定义module.exports和exports

2.NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports


API中还提供了其它的方法，就不细讲了，在上面例子的基础上自已动手一输出就知道了

 

　　module.id

　　返回string类型的模块标识，一般为完全解析后的文件名


　　module.filename

　　返回一个string类型的完全解析后文件名


　　* module.loaded
　　返回一个bool类型，表示是否加载完成
　　* module.parent
　　返回引用该模块的模块
　　module.children
　　* 返回该模块引用的所有模块对象的数组




