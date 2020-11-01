function myconst(attr,value){
    window[attr] = value;
    Object.defineProperty(window,attr,{
        enumerable:false,//因为window下访问不到const属性
        configurable:false,//不可删除
        get: function(){
            return value;
        },
        set: function(newVal){
            throw '不能修改const的值'
        }
    })
}
myconst('age',10);
console.log(`第一次打印${age}`);
delete age;
console.log(`在delete后再打印${age}`)
for(let key in window){
    if(key === 'age'){
        console.log('window下可以遍历到，但是这个打印不会输出')
    }
}
age = 20
