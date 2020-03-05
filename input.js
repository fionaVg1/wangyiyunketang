import React from "react"
// 将引入类变成常量，用来继承
const Component = React.Component
const Fragment = React.Fragment

//注意这个类，必须继承自Component
class InputNumber extends Component {

    constructor(props) {
        super(props)//调用父类的构造
        //设置属性，this.state,这是类的属性，为一个对象
        this.state = {
            //这里设置了两个属性，一个字符串，一个列表 ，可以使用 this.state.属性  在类内部使用
            value: "",
            defaultValue: [],
        }
        if (!this.state.value) {
            this.state.value = this.state.defaultValue;
        }

    }

    //render(){}，渲染方法，返回html和js混编的语法,返回值必须用div包裹,或者是引入React.Fragment
    render() {
        // console.log(this.state.input_value)
        return (
            <Fragment>
                <input type="text" value={this.state.value} onChange={this.onChange.bind(this)} />
            </Fragment>
        )
        // value={this.state.input_value}//绑定属性值
        // onChange={this.inputChange.bind(this)}//绑定方法,处理用户输入内容
    }

    //自定义方法
    onChange(val) {
    }
}

//抛出类,这是es6 语法 必须这么写
export default InputNumber;
