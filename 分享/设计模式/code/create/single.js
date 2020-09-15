let Singleton = function(name) {
    this.name = name;
}
Singleton.getInstance = function(name) {
    if (this.instance) {
        return this.instance;
    }
    return this.instance = new Singleton(name);
}
function store() {
    this.store = {

    };
    if (store.install) {
        return store.install;
    }
    store.install = this;
}
store.install = null;
var s1 = new store();
var s2 = new store();
s1.store.a = 1;
console.log(s2)

let _Vue;
function install(Vue) {
    if (install.installed && _Vue === Vue) {
        return;
    }
    install.installed = true;
    _Vue = Vue;
}