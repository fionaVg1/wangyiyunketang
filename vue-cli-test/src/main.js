import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//全局路由守卫
//前置钩子
router.beforeEach((to,from,next)=>{
  if(to.meta.isNeedLogin){
    next({
      path:'/login',
      query:{
        name:'aaa'
      }
    })
  }
  next();
});
//后置钩子
router.afterEach((to,from)=>{
  console.log(to,from);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
