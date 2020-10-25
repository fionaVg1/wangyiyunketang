/**
 * 适配器模式
 */
var log = (function() {
    return window.console.log;
})();
/**
 * 目前项目使用的A框架，现在改成了B，两个框架十分类似，但是有少数几个方法不同
 */
A.c();
//b.css();
A.o();
//B.on();
window.A = B;
A.c = function() {
    return B.css.apply(this, arguments);
}
A.o = function() {
    return B.on.apply(this, arguments);
}
/**
 * 参数适配
 * @param {}} options 
 */
function f1(options) {
    var defaultOptions = {
        name: '',
        age: '',
        sex: '',
        color: 'red'
    };
    for (let key in defaultOptions) {
        defaultOptions[key] = options[key] || defaultOptions[key];
    }
}