function cssTransform(ele, attr, val) {
    if (!ele.transform) {
        ele['transform'] = {};
    }
    //取值阶段
    if (typeof val === undefined) {
        //设置默认值阶段
        if (typeof ele.transform[attr] === undefined) {
            switch (attr) {
                case 'scale':
                    ele.transform[attr] = 1;
                    break;
                default:
                    ele.transform[attr] = 0;
            }
        }
        return ele.transform[attr];
    } else {
        //赋值
        ele.transform[attr] = val;
        let transformVal = '';
        for (let s in ele.transform) {
            let sVal = ele.transform[s];
            switch (s) {
                case 'scale':
                case 'scaleX':
                    transformVal += ' ' + s + '(' + sVal + ')';
                    break;
                case 'rotate':
                case 'rotateX':
                    transformVal += ' ' + s + '(' + sVal + 'deg)';
                    break;
                default:
                    transformVal += ' ' + s + '(' + sVal + 'px)';
            }
        }
        ele.style.transform = ele.style.webkitTransform = transformVal;
    }
}