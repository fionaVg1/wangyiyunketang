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