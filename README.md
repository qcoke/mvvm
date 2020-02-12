# mvvm 技术的相关实现

MVVM - Model-View-ViewModel（模型、视图、视图模型），Model，View 就不详细解释了，做过开发的都明白。ViewModel 通俗来说就是建立了 View 与 Model 模型层的连接，当我们的 Model 进行修改的时候 ViewModel 就会把修改自动同步到 View 层的相关组件中，反之亦然。

### 系统设计图
![avatar](/imgs/mvvm_img.png)

#### 知识点
- Object.defineProperty
  - Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
  - 语法：Object.defineProperty(obj, prop, descriptor)
    - obj         要在其上定义属性的对象。
    - prop        要定义或修改的属性的名称。
    - descriptor  将被定义或修改的属性描述符。
  - 参考链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
