//外观模式
function Model1() {
}

function Model2() {
}
//功能由Model1获取Model2的结果来完成
function use() {
    Model2(Model1());
}
function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}