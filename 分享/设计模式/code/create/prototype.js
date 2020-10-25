/**
 * 原型模式
 */

var parent = {
    getName: function(){
        console.log(this.name);
    }
}
var child = Object.create(parent);
child.name = 'child';
child.getName();

/**
 * 自己实现
 */
function getObject(parent){  
    var Fn = function(){};
    Fn.prototype = parent;
    var obj = new Fn();
    return obj;
}
var child = getObject(parent);
child.name = 'child';
child.getName();

/**
 * s-HR用到的原型模式
 */

function inherit(subClass, superClass) {
    if(superClass==null) return ;
    var Fun = function(){};//用一个空的函数作为中间缓冲，如果直接用父类的实例作为原型，可能有潜在问题，如计算量超大等
    Fun.prototype = superClass.prototype;
    subClass.prototype = new Fun();
    subClass.prototype.constructor = subClass;

    //提供 superClass 属性，这个属性可以弱化父类子类之间的耦合
    //否则，在子类中调用父类的构造函数就需要指明父类，此时只需调用这个属性即可
    subClass.superClass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}