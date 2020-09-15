
/**
 * 开闭原则
 * 描述：软件实体（类，模块，方法等等）应当对扩展开放，对修改关闭，即软件实体应当在不修改的前提下扩展 
 * 
 */
/**
 * 使用前
 */
class User{
    getUserData(urlType){
        if(urlType === 'a'){
            //to do something
        }else if(urlType === 'b'){
            //to do something
        }else{
            //to do something
        }
    }
}

/**
 * 使用后
 */
const Strategy = {
    a:function(){

    },
    b:function(){

    },
    other:function(){

    }
}
class User{
    getUserData(urlType){
        Strategy[urlType]?Strategy[urlType]():Strategy['other'];

    }
}