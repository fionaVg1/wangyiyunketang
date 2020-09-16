//事件代理，事件委托
window.onload = function(){
    document.getElementById('ul').onclick = function(event){
        console.log('current...'+event.currentTarget.tagName);//ul
        console.log('click obj...'+event.target.tagName);//li
    }
}
