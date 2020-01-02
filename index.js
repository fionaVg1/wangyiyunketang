import Vue from 'vue';
import App from './App.vue';
import Loading from './loading.js'
Vue.use(Loading);
new Vue({
    el:'#app',
    render:h=>{
        return h(App);
    },    
});