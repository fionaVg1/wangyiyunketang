// 打印结果


// (等待3s)--> 'whr eat apple' -(等待5s)--> 'whr eat durian'
class People {
    constructor(name) {
        this.name = name;
        this.queue = Promise.resolve();
    }
    sleep(timer) {
        this.queue = this.queue.then(() => {
            return new Promise(resolve => {
                setTimeout(function() {
                    resolve();
                }, timer);
            });
        });
        return this;
    }
    eat(fruit) {
        this.queue = this.queue.then(() => {
            console.log(`${this.name} eat ${fruit}`);
        })
        return this;
    }
}
new People('whr').sleep(3000).eat('apple').sleep(5000).eat('durian');