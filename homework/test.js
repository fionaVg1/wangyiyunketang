//数组A，数字N，A中找到a,b使a+b=N，可以反向思考，已知数字N，a,找其中是否包含数字b
function find(arr, target) {
    if (!Array.isArray(arr)) {
        throw '第一个参数请传入数组'
    }
    if (typeof target !== 'number') {
        throw '第二个参数清传入数字'
    }
    let hash = {};
    let result = {};
    //时间复杂度为n
    for (let value of arr) {
        let value2 = target - value;
        if (hash[value]) {
            result[value] = value2;
        } else {
            hash[value2] = value;
        }
    }
    for (let key in result) {
        console.log(`result:${key}----${result[key]}`);
    }
}
find([1, 3, 4, 2, 7], 5);
//result:2----3
//result:4----1