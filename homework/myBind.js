Function.prototype.myBind = function() {
    if (typeof this !== 'function') {
        throw 'caller must be function'
    }
    let context = arguments[0] || window;
    let args = Array.prototype.slice.call(arguments, 1);
    context.originalFn = this;
    return function() {
        let args2 = Array.prototype.slice.call(arguments);
        let execArgs = args.concat(args2);
        let result = context.originalFn(...execArgs);
        delete context.originalFn;
        return result;
    }
}

function add(x, y) {
    console.log(`result ${x+y}`)
}
add.myBind(null, 1)(2); //result 3