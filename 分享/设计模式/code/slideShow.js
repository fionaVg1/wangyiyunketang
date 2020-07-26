
class Slide {
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
            id:'',
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
            var data = finalOptions.images;
            data.forEach((image, index) => {
                var item = new SlideItem({ image: image });
                this.items.push(item);
                var itemEle = item.getDOM();
                finalOptions.id.appendChild(itemEle);
            });
        }
        //每次轮播的时候把name的值进行调整，然后发送到调用该组件的容器
    play(options) {
        this.slide();
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.slide();
        }, 5000);
    }
    slide(){
        let index = this.ids.indexOf(this.current); 
        let lastIndex = index-1;
        if (index === this.ids.length) {
            index = 0;                
        }
        if(index === 0){
            lastIndex = this.ids.length-1;
        }
        var itemObj = this.items[index]; 
        var lastItemObj = this.items[lastIndex];       
        lastItemObj.hideEle();
        itemObj.showEle();
        this.items.forEach((item,index)=>{

        });
        this.current++;
        if(this.current>this.ids.length){
            this.current = this.ids[0];
        }
    }
    render() {
        var options = this.initData();
        this.ids = [];
        this.items = [];
        options.images.forEach((option, index) => {
            this.ids.push(option.id);
        });
        this.current = this.ids[0];
        this.initDOM(options);
        this.play(options);
    }
}

class SlideItem {
    constructor(options) {
        this.options = options;
    }
    showEle() {
        this.ele.classList.add('animation');
        this.ele.style.display = 'block';
    }
    hideEle(){
        this.ele.style.display = 'none';
        this.ele.classList.remove('animation');
    }
    getDOM() {
        var image = this.options.image;
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute('src', image.src);
        div.appendChild(img);
        div.style.display = 'none';
        div.classList.add('slideItem');
        this.ele = div;
        return div;
    }
}