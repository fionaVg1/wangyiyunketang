function Factory(type) {
    switch (type) {
        case 'type1':
            return new Type1();
        case 'type2':
            return new Type2();
        case 'type3':
            return new Type3();
    }
}
(function() {
    function pop(type, content, color) {
        if (this instanceof pop) {
            var s = new this[type](content, color);
        } else {
            return new pop(type, content, color);
        }
    }
    pop.prototype.infoPop = function(content, color) {
        console.log('消息弹框:' + content + color);
    }
    pop.prototype.cancelPop = function(content, color) {
        console.log('取消消息弹框:' + content + color);
    }
    pop.prototype.confirmPop = function(content, color) {
        console.log('确认消息弹框:' + content + color);
    }
    window.pop = pop;
})();
var arr = [{ type: 'infoPop', content: 'hello', color: 'yellow' }, 
{ type: 'cancelPop', content: '取消', color: 'red' }, 
{ type: 'confirmPop', content: '确认', color: 'green' }];
arr.forEach(item => {
    window.pop(item.type, item.content, item.color);
});
(function() {
    var jquery = function(selector, contentx) {
        return new jquery.fn.init(selector, contentx);
    }
    jquery.fn = jquery.prototype = {
        init: function() {

        }
    }
    jquery.fn.init.prototype = jquery.fn;
    jquery.extend = jquery.fn.extend = function() {

    }
    jquery.extend({

    })
    window.$ = window.jquery = jquery;
})();