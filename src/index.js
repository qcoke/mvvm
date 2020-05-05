import _ from 'lodash';
import './assets/css/screen.css';
import { DepthFormat } from 'three';

class Watcher {
  constructor(proxy, key, cb) {
    this.cb = cb
    Dep.target = this
    this.value = proxy[key]
  }
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify(newVal) {
    this.subs.forEach(sub => {
      sub.cb(newVal, sub.value)
      sub.value = newVal
    })
  }
}

const observe = (obj) => {
  const deps = {}
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const dep = (deps[key] = deps[key] || new Dep);
      Dep.target && dep.addSub(Dep.target)
      Dep.target = null;
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      const dep = (deps[key] = deps[key] || new Dep);
      Promise.resolve().then(() => {
          dep.notify(value);
      })
      return Reflect.set(target, key, value, receiver);
    }
  })
}

// 创建OBSERVER对象
var state = observe({x: 0})
// 添加监听，在这里可以进一步的封装就是Vue的核心思想
new Watcher(state, 'x', function(n,o){
  console.log('new value:', n, ', old value:', o)
})

new Watcher(state, 'y', function(n,o){
  console.log('new value:', n, ', old value:', o)
})

state.x = 3
state.y = 3