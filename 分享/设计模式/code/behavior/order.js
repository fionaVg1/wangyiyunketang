var command = (function() {
    var action = {};
    return function excute() {}
})();
var canvasCommand = (function() {
    var actions = {
        drawCirecle: function() {

        },
        drawRect: function() {

        }
    };
    return function execute(commander) {
        if (Array.isArray(commander)) {
            commander.forEach(c => {
                let command = c.command;
                actions[command](c.config);
            });
        }
    }
})();
let commander = [
    { command: 'drawCirecle', config: {} },
    { command: 'drawCirecle', config: {} },
    { command: 'drawRect', config: {} }
];
canvasCommand(commander);
var createImg = (function() {
    var actions = {
        create: function(options) {
            var htmlArr = [];
            var _htmlstring = '';
            var _htmlTemplate = "<div><img src='{{img-url}}'/></div><h2>{{title}}</h2>";
            //策略模式
            var displayWay = {
                normal: function(arr) {
                    return [];
                },
                reverse: function(arr) {
                    return [];
                }

            };
            options.imgArr.forEach(img => {
                var _html;
                _html = _htmlTemplate.replace('{{img-url}}', img.img).replace('{{title}}', img.title);
                htmlArr.push(_html);
            });
            htmlArr = displayWay[options.type](htmlArr);
            _htmlstring = htmlArr.join('');
            return "<div>" + _htmlstring + "</div>";
        },
        display: function(options) {
            let _html = this.create(options);
            options.target.innerHTML = _html;
        }
    };
    return function execute(obj) {
        var _default = {
            imgArr: [{ img: 'xxx', title: 'img1' }],
            type: 'normal',
            target: document.body
        };
        //适配器模式，适配参数
        for (var key in _default) {
            _default[key] = obj[key] || _default[key];
        }
        actions.display(_default);
    }
})();
createImg({});