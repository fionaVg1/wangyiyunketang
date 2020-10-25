/**
 * 单一职责原则
 * 描述：类发生更改的原因应该只有一个
 */
/**
 * 修改前
 */
var createLayer = (function() {
    var div;

    return function() {
        if (!div) {
            div = document.createElement('div');
            div.innerHTML = '我是浮动窗';
            document.body.appendChild(div);
        }

        return div;
    };
})();

var layer1 = createLayer();
var layer2 = createLayer();

console.log(layer1 === layer2); // true

/**
 * 修改后
 */
var getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
}
var createLayer = function() {
    var div = document.createElement('div');
    div.innerHTML = '我是浮动窗';
    document.body.appendChild(div);
    return div;
}
var getLayer = getSingle(createLayer);
var layer1 = getLayer();
var layer2 = getLayer();
console.log(layer1 === layer2);//true
