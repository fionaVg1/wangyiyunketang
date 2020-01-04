import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    //单独路由守卫
    beforeEach:(to,from,next)=>{
      console.log(to,from);
      next();
    }
  },
  {
    path: '/about/:user',
    name: 'about',
    //路由元信息
    meta:{
      isNeedLogin:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    //嵌套路由实现,（如果左侧菜单栏，右侧菜单栏的子页面）
    children:[
      {
        path:'detail',
        component:()=> import('../views/AboutDetail.vue')
      }
    ]  
  },
  {
    path:'*',
    name:'404',
    component:()=>import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
