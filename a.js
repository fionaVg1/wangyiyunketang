define(['b'],function(b){
    var hello = function(){
        console.log('hello :' + b.name);
    }
    return {
        hello:hello
    }
});