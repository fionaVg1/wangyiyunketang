/**
 * 惰性模式
 */
//使用前
var AddEvent = function(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
};
/**
 * 方法的重新定义
 */
var AddEvent = function(dom, type, fn) {
    if (dom.addEventListener) {
        return function(dom, type, fn) {
            dom.addEventListener(type, fn, false);
        }
    } else if (dom.attachEvent) {
        return function(dom, type, fn) {
            dom.attachEvent('on' + type, fn);
        }
    } else {
        return function(dom, type, fn) {
            dom['on' + type] = fn;
        }
    }
}();