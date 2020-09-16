/**
 * 策略模式
 */
/**
 * 假设要编写一个计算器，有加减乘除，我们可以把一层一层的if判断，变成上面的形式    
 */
function Strategy(type, a, b) {
    var strategyer = {
        add: function(a, b) {
            return a + b;
        },
        minus: function(a, b) {
            return a - b;
        },
        division: function(a, b) {
            return a / b;
        }
    }
    return strategyer[type](a, b);
}
function stateFacotr(status) {
    var stateObject = {
        _status: '',
        state: {
            state1: function() {

            },
            state2: function() {

            }
        },
        run: function() {
            return this.state[this._status];
        }
    }
    stateObject._status = status;
    return stateObject;
}
stateFacotr('state1').run();
/**
 * 权限使用
 */
function showControll() {
    this.permission = '';
    this.power = {
        boss: function() {
            console.log('boss权限')
        },
        manager: function() {
            console.log('经理权限')
        },
        staff: function() {
            console.log('普通员工权限')
        }
    }
}
showControll.prototype.show = function() {
    var _self = this;
    axios.get('xxx').then((res) => {
        _self.permission = res;
        _self.power[this.permission]();
    });
}

new showControll().show();
/**
 * 小球移动
 */
function mover() {
    this.satus = [];
    this.actionHandle = {
        left: moveLeft,
        right: moveRight,
        top: moveTop,
        bottom: moveBottom
    }
}
mover.prototype.run = function() {
    this.status = Array.prototype.slice.call(arguments);
    this.status.forEach(action => {
        this.actionHandle[action]();
    })
}
new mover().run('left', 'top');