# MVVM 技术的相关实现

MVVM - Model-View-ViewModel（模型、视图、视图模型），Model，View 就不详细解释了，做过开发的都明白。ViewModel 通俗来说就是建立了 View 与 Model 模型层的连接，当我们的 Model 进行修改的时候 ViewModel 就会把修改自动同步到 View 层的相关组件中，反之亦然。


Vue 的实现方式，也差不多，就是对模型数据进行监听。一旦对象发生了变化就会触发绑定的方法，对数据进行更新。

### 系统设计图
![avatar](/imgs/mvvm_img.png)

### 从哪里开始？
好吧，依然，我们从jQuery的作者 john 的风格开始，先从自己写代码爽的风格，然后再来考虑实现。如下：
```
new vue({
  el: '#DOMID',
  data: function(){
    return {
      text: 'hello'
    }
  },
  methods: {
    clickMethod(){
      alert('我被点击了')
    }
  }
})
```
好吧，先把核心的核心搞定。
```
import _ from 'lodash';
import './assets/css/screen.css';

let data = {text:'world'};
let val = data.text;

Reflect.defineProperty(data, 'text', {
    get(){
        console.log('get:' + val);
        return val;
    },
    set(newVal) {
        console.log('set:' + newVal);
        val = newVal;
    }
});

window.onload = function(){
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        // alert('x');
        data.text = "vue";
        console.log("===>", data.text);
        console.log("改一个不存在的对象试试，应该到这里就是最后一条输出语句了。")
        data.a = '123';
    });
}

```

#### 知识点
- Object.defineProperty
  - Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
  - 语法：Object.defineProperty(obj, prop, descriptor)
    - obj         要在其上定义属性的对象。
    - prop        要定义或修改的属性的名称。
    - descriptor  将被定义或修改的属性描述符。
  - 参考链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- Reflect 新API，把原有的 Object 中的部分方法移动到了这个对象里，可以方便的操作语言底层的方法,EX: Object.defineProperty 它一共有13个静态方法
