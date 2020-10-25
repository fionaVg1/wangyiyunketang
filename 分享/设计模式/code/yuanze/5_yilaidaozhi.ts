/**
 * 依赖倒置原则
 * 描述： 高层模块不应该依赖于低层模块，二者都应该依赖于抽象
 *        抽象不应该依赖于细节，细节应该依赖于抽象
 */
/**
 * 修改前
 */
class A{
    // B是一个类的实例
    constructor(public B:B){
        this.B = B;
    }
    fn(){
        this.B.heihei()
    }
}

class B{
   heihei(){
   }
}

new A(new B());


/**
 * 修改后
 * 依赖接口
 */
interface BI{
    fn(a:string):string
}
class B1 implements BI{
    fn(a:string){
        console.log(a)
        return a;
    }
}
class A1{
    constructor(public B1:BI){
        this.B1 = B1;
    }
    fn(){
        this.B1.fn('heihei');
    }
}

