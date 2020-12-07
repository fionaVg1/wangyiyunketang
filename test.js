<<<<<<< HEAD
let arr = [1,3,1,3,2];
let map = new Map();
let result = [];
for(let value of arr){
    if(map.has(value)){
        let num = map.get(value);
        map.set(value,++num);
    }else{
        map.set(value,1);
    }
}
map.forEach((value,key)=>{
    if(value === 1){
        result.push(key)
    }
});
console.log(result);
=======
let arr = [1, 2, 3];
Object.defineProperty(arr, '3', {
    set: function(newval) {
        console.log('update value....', newval)
    },
    get: () => {
        console.log('get value....')
        return 4
    }
})
>>>>>>> 5fc7cddbd9f588d6fc2b5dd3cbb80ef029e7ebe5
