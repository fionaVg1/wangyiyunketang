/**
 * 数据访问模式
 */
/**
 * LocalStorage数据访问类
 * @param {string} prefix Key前缀
 * @param {string} timeSplit 时间戳与存储数据之间的分割符
 */
var Dao = function (prefix, timeSplit) {
    this.prefix = prefix;
    this.timeSplit = timeSplit || '|-|';
}
// LocalStorage数据访问类原型方法
Dao.prototype = {
    // 操作状态
    status: {
        SUCCESS: 0,     // 成功
        FAILURE: 1,     // 失败
        OVERFLOW: 2,    // 溢出
        TIMEOUT: 3      // 过期
    },
    // 本地存储对象
    storage: localStorage || window.localStorage,
    // 获取带前缀的真实键值
    getKey: function (key) {
        return this.prefix + key;
    },
    // 添加（修改）数据
    set: function (key, value, callback, time) {
       //
    },
    // 获取数据
    get: function (key, callback) {
        //
    },
    // 删除数据
    remove: function (key, callback) {
        //
    }
}