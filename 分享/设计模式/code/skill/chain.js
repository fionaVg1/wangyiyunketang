/**
 * 链式调用模式
 */
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(handle) {
            if (!isFunction(handle)) {
                throw new Error('Promise resolver test is not a function');
            }
            this.handle = handle;
            this._status = PENDING;
            this._value = undefined;
            this._fulfilledQueues = [];
            this._rejectedQueues = [];
            try {
                handle(this._resolve.bind(this), this._reject.bind(this));
            } catch (err) {
                this._reject(err);
            }
        }
        // 添加resovle时执行的函数
    _resolve(val) {
        const run = () => {
                if (this._status !== PENDING) return
                    // 依次执行成功队列中的函数，并清空队列
                const runFulfilled = (value) => {
                        let cb;
                        while (cb = this._fulfilledQueues.shift()) {
                            cb(value)
                        }
                    }
                    // 依次执行失败队列中的函数，并清空队列
                const runRejected = (error) => {
                        let cb;
                        while (cb = this._rejectedQueues.shift()) {
                            cb(error)
                        }
                    }
                    /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
                      当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
                    */
                if (val instanceof MyPromise) {
                    val.then(value => {
                        this._value = value
                        this._status = FULFILLED
                        runFulfilled(value)
                    }, err => {
                        this._value = err
                        this._status = REJECTED
                        runRejected(err)
                    })
                } else {
                    this._value = val
                    this._status = FULFILLED
                    runFulfilled(val)
                }
            }
            // 为了支持同步的Promise，这里采用异步调用
        setTimeout(run, 0)
    }

    _reject(err) {
        if (this._status != PENDING) {
            return;
        }
        const run = () => {
            this._status = REJECTED;
            this._value = err;
            let cb;
            while (cb = this._rejectedQueues.shift()) {
                cb(value);
            }
        }
        setTimeout(() => run(), 0);
    }
    then(onFulfilled, onRejected) {
        const { _value, _status } = this;
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
            let fulfilled = (value) => {
                try {
                    if (!isFunction(onFulfilled)) {
                        onFulfilledNext(value);
                    } else {
                        let res = onFulfilled(value);
                        if (res instanceof MyPromise) {
                            res.then(onFulfilledNext, onRejectedNext);
                        } else {
                            onFulfilledNext(value);
                        }
                    }
                } catch (err) {
                    onRejectedNext(err);
                }
            };
            let rejected = error => {
                try {
                    if (!isFunction(onRejected)) {
                        onRejectedNext(error);
                    } else {
                        let res = onRejected(error);
                        if (res instanceof MyPromise) {
                            res.then(onFulfilledNext, onRejectedNext);
                        } else {
                            onFulfilledNext(res);
                        }
                    }
                } catch (err) {
                    onRejectedNext(err);
                }
            };
            switch (_status) {
                case PENDING:
                    this._fulfilledQueues.push(fulfilled);
                    this._rejectedQueues.push(rejected);
                    break;
                case FULFILLED:
                    onFulfilled(_value);
                    break;
                case REJECTED:
                    onRejected(_value);
                    break;
            }
        });
    }
    all(promises) {
        return new MyPromise(function(resolve, reject) {
            if (!isArray(promises)) {
                return reject(new TypeError('arguments must be an array'));
            }
            var resolvedCounter = 0;
            var promiseNum = promises.length;
            var resolvedValues = new Array(promiseNum);
            for (var i = 0; i < promiseNum; i++) {
                (function(i) {
                    MyPromise.resolve(promises[i]).then(function(value) {
                        resolvedCounter++
                        resolvedValues[i] = value
                        if (resolvedCounter == promiseNum) {
                            return resolve(resolvedValues)
                        }
                    }, function(reason) {
                        return reject(reason)
                    })
                })(i);
            }
        });
    }
}

function isFunction(fn) {
    return typeof fn === 'function';
}