// 打印结果


// 实现taskSum(1000,()=>{console.log(1)}).task(1200,()=>{console.log(2)}).task(1300,()=>{console.log(3)})，
// 这里等待1s，打印1，之后等待1.2s，打印2，之后打印1.3s，打印3



function taskSum(timer,callback){   
    return new Task(timer,callback);
}

class Task {
    constructor(timer,callback){
        this.timer = timer;
        this.callback = callback;
        setTimeout(()=>{
            callback();
        },timer);
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
    task(timer,callback){   
        this.queue.then(()=>{
            setTimeout(()=>{
                callback();
            },timer);
        })
        return this;
    }
}
taskSum(1000,()=>{console.log(1)}).task(1200,()=>{console.log(2)}).task(5300,()=>{console.log(3)});
