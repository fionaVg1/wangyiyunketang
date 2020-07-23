//轮播图

var options = {
    id:'imgContent',
    selected: 'item2',
    images: [{
        id: 1,
        name: 'item1',
        src: './static/img/1.jpg'
    }, {
        id: 2,
        name: 'item2',
        src: './static/img/2.jpg'
    }, {
        id: 3,
        name: 'item3',
        src: './static/img/3.jpg'
    }, {
        id: 4,
        name: 'item4',
        src: './static/img/4.jpg'
    }, {
        id: 5,
        name: 'item5',
        src: './static/img/5.jpg'
    }, {
        id: 6,
        name: 'item6',
        src: './static/img/6.jpg'
    }]
}
var pic = new Picture(options);
class Picture {
    constructor(options) {
        this.html = '';
        this.options = options;
        this.render();
    }
    initData() {
        //各大框架里面都有使用的东西--与默认属性合并
        //1.有些属性不需要用户提供
        //2.防止用户漏传入
        var final = {};
        var defaultOptions = {
            images: [],
            renderId: document,          
        };
        //适配器模式
        for (let item in defaultOptions) {
            if (this.options[item]) {
                final[item] = this.options[item];
                if (item === 'id') {
                    final[item] = document.getElementById(this.options[item]);
                }
            } else {
                final[item] = defaultOptions[item];
            }
        }
        return final;
    }
    initDOM(finalOptions) {
        //需要样式
        var styleArr = [{
            //包裹图片div样式
            float: 'left',
            width: finalOptions.size[0] + 'px',
            height: finalOptions.size[1] + 'px',
            position: 'relative'

        }, {
            //下标顺序的样式
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            background: 'black',
            color: 'white',
            padding: '10px',
            width: '10px',
            height: '10px'

        }, {
            //图片样式
            width: '100%',
            height: '100%'
        }];
        var wraper = document.createElement('div');
        //排序图片
        //用策略模式
        var commanderHandle = {
            normal: function(arr) {
                return arr;
            },
            reverse: function(arr) {
                return arr.reverse();
            }
        }
        var data = commanderHandle[finalOptions.sort](finalOptions.data);
        data.forEach((url, index) => {
            var div = document.createElement('div');
            var img = document.createElement('img');
            var span = document.createElement('span');
            var styleObj = null;
            var handleDom = null;
            styleArr.forEach((style, index) => {
                //享元模式
                switch (index) {
                    case 0:
                        handleDom = div;
                        break;
                    case 1:
                        handleDom = span;
                        break;
                    case 2:
                        handleDom = img;
                        break;
                }
                for (var styleName in style) {
                    handleDom.style[styleName] = style[styleName];
                }
            });
            img.setAttribute('src', url);
            div.appendChild(img);
            span.innerHTML = index + 1;
            div.appendChild(span);
            wraper.appendChild(div);
        });
        this.html = wraper;
    }
    renderDOM(element) {
        element.appendChild(this.html);
    }
    render() {
        var order = this.initData();
        this.initDOM(order);
        this.renderDOM(order.id);
    }
}

class Slide {

}
class SlideItem {

}