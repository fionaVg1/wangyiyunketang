/**
 * 装饰者模式
 */
var a = {
    b: function() {
    }
}

function myb() {
    a.b();
    //TODO 要扩展的方法
}
dom.onclick = function() {
    console.log('1');
};
var decorator = function(dom, fn) {
    if (typeof dom.onclick == 'function') {
        var _old = dom.onclick;
        dom.onclick = function() {
            _old();
            fn();
        }
    }
};
decorator(document.getElementById('dom1'), function() {
    console.log('还要执行2');
});
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});