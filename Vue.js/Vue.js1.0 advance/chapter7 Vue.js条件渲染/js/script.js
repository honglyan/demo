window.onload = function(){
  var dataList={
     classValue : 'blue',
     innnerText : 'hello world!',
     innerHTML : '欢迎来到<i style="color:green;">麦子轩</i>！',
     name : 'honglyan',
     age : 18,
     display: "true"
  };
  new Vue({
    el : '#test',
    data : dataList
  });
}
