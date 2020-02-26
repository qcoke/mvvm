class MVVM {
  // 构造器
  constructor(options) {
    // 把EL,DATA挂在在MVVM中
    this.$el = options.el;
    this.$data = options.data;
    // 如果有要编译的模板就开始编译
    if (this.$el) {
      // 数据劫持，就是把对象所有的属性添加 get 和 set
      new Observer(this.$data);
      // 将数据代理到实例上
      this.proxyData(this.$data);
      // 用数据和元素进行编译
      new Compiler(this.el, this);
    }
  }
  // 代理数据的方法
  proxyData(data) {
    Object.keys(data).forEach(key => {
      // 如果有子属性，也添加订阅（不过感觉这个东西不是一个深度迭代的，就迭代了第一层）
      Object.defineProperty(this, key, {
        get() {
          return data[key];
        },
        set(newVal) {
          data[key] = new newVal
        }
      })
    });
  }
}