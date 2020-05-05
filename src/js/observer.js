function observe(data) {
  if(!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(function(key){
    defineReactive(data, key, data[key])
  })
}


// Observe的值监听
/* function defineReactive(data, key, val) {
  var dep = new Dep()
  observe(val)
  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 不能在define
    configurable: false,
    get: function(){
      // 由于需要在闭包内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher, 添加完移除
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set: function(newVal) {
      console.log('Value值已经被改变了：', val, '->', newVal)
      val = newVal
      // 通知所有的订阅者
      dep.notify()
    }
  })
}

function Dep() {
  this.subs = []
}
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
  },
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update()
    })
  }
}

// Watcher.js
function Watcher(vm,exp,cb) {
  this.cb = cb;
  this.vm = vml;
  this.exp = exp;
}
Watcher.prototype = {
  update: function() {
    // 属性值变化收到通知
    this.run();
  },
  run: function(){
    var value = this.get();
    var oldValue = this.value;
    if(value !== oldValue){
      this.value = value;
      // 执行Compile中绑定的回调，更新视图
      this.cb.call(this.vm, value, oldValue)
    }
  },
  get: function() {
    Dep.target = this;
    // 触发 gettter，添加自己到属性订阅器中
    var value = this.vm[exp];
    Dep.target = null;
    return value;
  }
}
 */
