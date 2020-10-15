/**
 * 颜色由十六进制转换为十进制
 */
String.prototype.colorRgb = function() {
    let hexColor = this,
        rgbColor;
    let regex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    if (!hexColor || !regex.test(hexColor)) {
        throw '参数不符合规范';
    }
    let newHexColor = '#';
    if (hexColor.length === 4) {
        for (var i = 1; i < 4; i++) {
            newHexColor = newHexColor + hexColor.slice(i, i + 1) + hexColor.slice(i, i + 1);
        }
    }
    let resultArr = [];
    for (var i = 1; i < 7; i += 2) {
        let str = newHexColor.slice(i, i + 2);
        resultArr.push(parseInt('0x' + str));
    }
    rgbColor = 'RGB(' + resultArr.join(',') + ')';
    return rgbColor;
}
console.log('#fff'.colorRgb()); //RGB(255,255,255)
console.log('#000'.colorRgb()); //RGB(0,0,0)
/**
 * 颜色由十进制转换为十六进制
 */
String.prototype.colorHex = function() {
    let rgbColor = this,
        hexColor = '#';
    let regex = /(?:\(|\)|rgb|RGB)*/g;
    if (!rgbColor || !regex.test(rgbColor)) {
        throw '参数不符合规范';
    }
    rgbColor = rgbColor.replace(regex, '');
    var rgbArr = rgbColor.split(',');
    rgbArr.forEach(element => {
        let num = parseInt(element).toString(16);
        if (num.length < 2) {
            num = '0' + num;
        }
        hexColor = hexColor + num;
    });
    return hexColor;
}
console.log('rgb(255,255,255)'.colorHex()); //#ffffff
console.log('rgb(255,0,0)'.colorHex()); //#ff0000
/**
 * 随机生成一个十进制的颜色
 * 核心：生成一个[0,255]的随机数
 */
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
console.log('random',randomNum(0,255))