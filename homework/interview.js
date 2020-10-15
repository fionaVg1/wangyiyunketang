if(typeof(alert)!=='function'){
    alert = (args)=>{
        console.log.call(console,args);
    }
}
function Foo(){
    getName = function(){
        alert(1);
    }
    return this;
}
Foo.getName = function(){
    alert(2)
}
Foo.prototype.getName = function(){
    alert(3);
}
var getName = function(){
    alert(4);
}
function getName(){
    alert(5);
}
Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1

function executor(handler){
    handler();//this指向的是window
}
var counter = {
    count:0,
    inc:function(){
        this.count++;
    }
};
executor(counter.inc);
console.log(counter.count)//0

function bubbleSort(arr) {
    for (let i = arr.length-1; i >0; i--) {
        var isSort = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSort = false;
            }
        }
        if(isSort){
            console.log(arr);
            return;
        }
    }
    console.log(arr);
}
bubbleSort([3,2,8,7,9]);

//最近最少使用
class LRU{
    constructor(maxCapacity){
        this.maxCapacity = maxCapacity;
        this.cache = new Map();
    }
    get(key){
        if(!this.cache.has(key)){
            return -1;
        }
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    }
    set(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else{
            if(this.cache.size === this.maxCapacity){
                let firstKey = this.cache.keys().next().value;
                this.cache.delete(firstKey);
            }
        }
        this.cache.set(key,value);
    }
}