(function(w) {
    w.gesture = function(ele, callback) {
        let isStart = false;
        ele.addEventListener('touchstart', function(event) {
            if (event.touches.length >= 2) {
                isStart = true;
                this.startDistance = getDistance(event.touches[0], event.touches[1]);
                this.startDeg = getDeg(event.touches[0], event.touches[1]);
                if (callback && typeof callback['start'] === 'function') {
                    callback['start']();
                }
            }
        })
        ele.addEventListener('touchmove', function(event) {
            if (event.touches.length >= 2) {   
                const curDis = getDistance(event.touches[0], event.touches[1]);
                const curDeg = getDeg(event.touches[0], event.touches[1]);
                event.scale = curDis/this.startDistance;
                event.rotation = curDeg - this.startDeg;
                if (callback && typeof callback['change'] === 'function') {
                    callback['change'](event);
                }
            }
        })
        ele.addEventListener('touchend', function(event) {
            if (event.touches.length <2 && isStart) {                
                if (callback && typeof callback['change'] === 'function') {
                    callback['end']();
                }
                isStart = false;
            }
        })


        function getDistance(touch1, touch2) {
            const x = touch1.clientX - touch2.clientX;
            const y = touch2.clientY - touch2.clientY;
            const dis = Math.sqrt(x * x + y * y);
        }
        //获取角度
        function getDeg(touch1, touch2) {
            const x = touch1.clientY - touch2.clientX;
            const y = touch1.clientY - touch2.clientY;
            const radian = Math.atan2(y, x);
            return radian * 180 / Math.PI;
        }
    }
})(window);