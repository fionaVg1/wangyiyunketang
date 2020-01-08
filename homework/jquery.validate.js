(function(root,pluginName){
    //校验规则，微引擎
    var RULES = {
        idcard: function () {
            var inputVal = this.val();
            var regex = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            return regex.test(inputVal);
        },
        tel: function () {
            var inputVal = this.val();
            var regex = /1\d{10}/;
            return regex.test(inputVal);
        },
        email: function () {
            var inputVal = this.val();
            var regex = /\w+@\w+\.\w+/;
            return regex.test(inputVal);
        },
    };
    $.fn[pluginName] = function(options){
        if(!this.is('form')){
            return;
        }
        var defaultOptions = {
            triggerEvent:'change',
            sign:'dv',
            error:'输入不合法，请检查输入数据'
        };
        $.extend(defaultOptions,options);
        var inputEls = this.find('input');        
        inputEls.on(defaultOptions.triggerEvent,function(event){
            var value = this.value;
            var $ele = $(this);
            $ele.next('span').remove();
            $.each(RULES,function(key,func){
                var value = $ele.data(defaultOptions.sign+'-'+key);
                if(value){
                    var result = func.call($ele);
                    if(!result){
                        var errorMsg = $ele.data(defaultOptions.sign + '-' + key + "-error") || defaultOptions.error;
                        $ele.after('<span style="color:red;">'+errorMsg+'</span>');
                    }
                }
            });
            console.log(value);
        });
    };
    $.fn[pluginName]['expand'] = function(options){
        $.extend(RULES,options);
    }
})(this,'validate');