/**
 * 接口隔离原则，避免胖接口
 * 描述：其一是不应该强行要求客户端依赖于它们不用的接口；
 *      其二是类之间的依赖应该建立在最小的接口上面。
 *      简单点说，客户端需要什么功能，就提供什么接口，对于客户端不需要的接口不应该强行要求其依赖；
 *      类之间的依赖应该建立在最小的接口上面，这里最小的粒度取决于单一职责原则的划分
 */

const { Interface } = require("readline");

//接口一
interface interface1{
    fn1():string
    fn2():string
}
interface interface2{
    fn3():string
}
