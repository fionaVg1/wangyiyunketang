var log = (function() {
    return window.console.log;
})();
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