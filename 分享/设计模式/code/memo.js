//备忘录模式
function Memento() {
    var cache = {};
    return function(cacheName) {
        if (cache[cacheName]) {
            //有缓存的操作的
        } else {
            //没缓存的操作
        }
    }
}
var MementoFn = Memento();
MementoFn('xxx');
function pager() {
    var cache = {};
    return function(pageName) {
        if (cache[pageName]) {
            return cache[pageName];
        } else {
            axios.get(options).then(res => {
                cache[pageName] = res;
            })
        }
    }
}

function moveDiv() {
    this.sateList = [];
    this.nowState = 0;
}
moveDiv.prototype.move = function(type, num) {
    changeDiv(type, num);
    this.sateList.push({
        type: type,
        num: num
    });
    this.nowState = this.sateList.length - 1;
}
move.prototype.go = function() {
    var _state;
    if (this.nowSate < this.sateList.length - 1) {
        this.nowState++;
        _state = this.sateList[this.nowState];
        changeDiv(_state.type, _state.num);
    }
}