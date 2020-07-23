function Iterator(item) {
    this.item = item;
}
Iterator.prototype.dealEach = function(fn) {
    for (var i = 0; i < this.item.length; i++) {
        fn(this.item[i], i);
    }
}
function Iterator(data) {
    this.data = data;
}
Iterator.prototype.dealEach = function(fn) {
    if (this.data instanceof Array) {
        for (let i = 0; i < this.data.length; i++) {
            fn(this.data[i], i);
        }
    } else {
        for (let key in this.data) {
            fn(this.data[key], key);
        }
    }
}
var data = [
    { num: 1 },
    { num: 2 },
    { num: 3 }
];

function iteratorFactory(data) {
    function Iterator(data) {
        this.data = data;
    }
    Iterator.prototype.geHasSomenum = function(handler, num) {
        var _arr = [];
        var handleFn;
        if (typeof handler == 'function') {
            handleFn = handler;
        } else {
            handleFn = function(item) {
                if (item[handler] === num) {
                    return item;
                }
            }
        }
        for (let i = 0; i < this.data.length; i++) {
            var _result = handlerFn.call(this, this.data[i]);
            if (_result) {
                _arr.push(_result);
            }
        }
        return _arr;
    }
}
iteratorFactory(data).geHasSomenum('num', 1);
iteratorFactory(data).geHasSomenum(function(item) {
    if (item.num - 1 == 2) {
        return item;
    }
});