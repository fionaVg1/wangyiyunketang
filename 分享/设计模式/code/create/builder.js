//建造者模式
function Module1() {
}

function Module2() {
}

function Final() {
    this.module1 = new Module1();
    this.module2 = new Module2();
}
function Vue(options) {
    if (!(this instanceof Vue)) {
        console.warn('请使用new操作符');
    }
    this._init(options);
}
//混入
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);