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
