Object.prototype.myInstanceOf = function(cons) {
    if (typeof cons !== 'function') {
        throw 'cons must be a constructor function'
    }
    let __proto__ = this.__proto__;
    let prototype = cons.prototype;
    if (!__proto__) {
        return false;
    }
    while (true) {
        if (__proto__ == null) {
            return false;
        }
        if (__proto__ === prototype) {
            return true;
        }
        __proto__ = __proto__.__proto__;
    }

}

function Person(name) {
    this.name = name;
}
let p = new Person('fiona');
console.log(p.myInstanceOf(Person)); //true