(function(window) {
    function myMobile(selector) {
        return myMobile.prototype._init(selector);
    }
    myMobile.prototype = {
        _init: function(selector) {
            if (typeof selector === 'string') {
                this.ele = window.document.querySelector(selector);
                //this 原型对象
                return this;
            }
        },
        //单击事件
        tap: function(handler) {
            this.ele.addEventListener('touchstart', touchFn);
            this.ele.addEventListener('touchend', touchFn);
            let startTime, endTime;

            function touchFn(e) {
                switch (e.type) {
                    case 'touchstart':
                        startTime = new Date().getTime();
                        break;
                    case 'touchend':
                        endTime = new Date().getTime();
                        if (endTime - startTime < 200) {
                            handler.call(this, e);
                        }
                        break;
                }
            }
        },
        //长按事件
        longTap: function(handler) {
            var _self = this;
            _self.ele.addEventListener('touchstart', touchFn);
            _self.ele.addEventListener('touchend', touchFn);
            _self.ele.addEventListener('touchmove', touchFn);
            let timerId;

            function touchFn(e) {
                switch (e.type) {
                    case 'touchstart':
                        timerId = setTimeout(() => {
                            handler.call(_self, e);
                        }, 2000);
                        break;
                    case 'touchmove':
                        clearTimeout(timerId);
                        break;
                    case 'touchend':
                        clearTimeout(timerId);
                        break;
                }
            }
        },
        //左边滑动
        sideLeft: function() {
            var _self = this;
            _self.ele.addEventListener('touchstart', touchFn);
            _self.ele.addEventListener('touchend', touchFn);
            let startX, startY, endX, endY;

            function touchFn(e) {
                let firstTouch = e.changedTouches[0];
                switch (e.type) {
                    case 'touchstart':
                        startX = firstTouch.pageX;
                        startY = firstTouch.pageY;
                        break;
                    case 'touchend':
                        endX = firstTouch.pageX;
                        endY = firstTouch.pageY;
                        //按断是横向还是纵向滑动
                        if (Math.abs(endX - startX) >= Math.abs(endY - endX) && startX - endX >= 25) {
                            handler.call(_self,e);
                        }
                        break;
                }
            }
        }
    }
    window.$ = window.myMobile = myMobile;
})(window);