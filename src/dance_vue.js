

/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-06-11 16:39:03
 * @LastEditTime: 2020-06-11 17:30:38
 */
var obj = {};
Object.defineProperty(obj, 'hello', {
    get: function () {
        console.log("get方法被调用")
    },
    set: function (newValue) {
        console.log("set方法被调用")
        document.getElementById('test').value = newValue;
        document.getElementById("test1").innerHTML = newValue;
    }
});
document.getElementById("test").addEventListener('input', function (e) {
    obj.hello = e.target.value
});
function compilex(node, vm) {
    var reg = /\{\{(.*)\}\}/g;
    var attr = node.attributes;
    for (var i = 0; i < attr.length; i++) {
        if (attr[i].nodeName == 'v-mode') {
            var name = attr[i].nodeValue;
            node.value = vm.data[name]
        }
    }
    if (node.nodeType === 3) {
        if (reg.test(node.nodeValue)) {
            var name = RegExp.$1;//获取匹配到的字符串
            name = name.trim();
            node.nodeValue = vm.data[name]
        }
    }
}
function nodeContainer(node, vm, flag) {
    var flag = flag || document.createDocumentFragment();
    var child;
    while (child = node.firstChild) {
        compilex(child, vm);
        flag.appendChild(child);
        nodeContainer(child, vm.flag);
    }
    return flag
}
function DanceVue(options) {
    this.data = options.data;
    var id = options.el;
    var dom = nodeContainer(document.getElementById(id), this);
    document.getElementById(id).appendChild(dom)
}
