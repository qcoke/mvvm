import _ from 'lodash';
import './assets/css/screen.css';

let data = { text: 'world' };
let val = data.text;

/* function observe(data) {
    // 监听的 DATA 对象
    if (Object.prototype.toString.call(data) === '[object Object]') {
        for (let prop in data) {
            defineReactive(data, prop, data[prop]);
        }
    }
} */

Reflect.defineProperty(data, 'text', {
    get() {
        console.log('get:' + val);
        return val;
    },
    set(newVal) {
        console.log('set:' + newVal);
        val = newVal;
    }
});

window.onload = function () {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        data.text = "vue";
        console.log("===>", data.text);
        console.log("改一个不存在的对象试试，应该到这里就是最后一条输出语句了。")
        data.a = '123';
    });
}
