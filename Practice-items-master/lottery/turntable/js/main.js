window.onload = function(){

    function getClassName(tagName, classname) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(classname);
        } else {
            var results = [];
            var elems = document.getElementsByTagName('*');
            for (var i = 0; i < elems.length; i++) {
                if (elems[i].className.indexOf(classname) != -1) {
                    results[results.length] = elems[i];
                }
            }
            return results;
        }
    }
    
    var turntable = getClassName('ul','turntable')[0];
    var result = getClassName('p','result')[0];
    var internal = getClassName('p','internal')[0];

    var flag = true;
    var turns = Math.ceil(Math.random()*3+1);//旋转圈数
    var speed = Math.floor(Math.random()*5)+3;//速度
    var num = Math.ceil(Math.random()*12)-1;//随机抽取的位置
    var times = 20;
    
    var arr = [];
    var MathNum = 14;//重新编排编号数字与转盘对应，14是因为i=1时已经减去了一个
    var turnNum = 12;
    var deg = 360/turnNum;//转盘所对应的度数
    var turnBuffer = deg/2-5;//每个格子对应的度数缓冲区

    for(let i = 1;i<=turnNum;i++){

        let num = MathNum-i;
        if(i==1){num = i}
        let turnDeg = deg*i-deg; 
        arr.push([num,turnDeg+turnBuffer,turnDeg-turnBuffer]) ;

    }

    var initialDegMini = turns*360+arr[num][2];//初始最小值度数
    var initialDegMax = turns*360+arr[num][1];//初始最大值度数
    var initital = 0;

  
    function star (){

        turntable.style.transform ="rotate("+initital+"deg)";//对转盘设置旋转角度
        initital += speed; 

        if(initital >= initialDegMini-420){ //判断当前旋转的角度是否达到定义的值，若达到则进行减速
            if(speed>1.2){
                speed = speed-0.05;
            }
        }
       
        if(initital>initialDegMini &&  initital<initialDegMax ){ //判断当前旋转角度是否已经进入最大角度和最小的角度区间

            result.innerHTML ='结果为：'+ arr[num][0]
           
            initital = arr[num][2];
            turntable.style.transform ="rotate("+initital+"deg)";

            //重置
            num =  Math.ceil(Math.random()*12)-1;
            turns = Math.ceil(Math.random()*5+1);
            speed = Math.floor(Math.random()*5)+3;
            times = 20;
            initialDegMini = turns*360+arr[num][2];
            initialDegMax = turns*360+arr[num][1];

            flag = true;
        }else{
            setTimeout(star,times);
        }

    }

   document.onclick = function(e){
       var target = e.target || e.srcElement;
       if(target.className == 'internal' && flag== true){
        flag = false;
        result.classList.remove('none');
        result.innerHTML = '抽奖中...';
        setTimeout(star,times);
       }
   }
}