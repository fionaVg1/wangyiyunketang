import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [{ id: 0, value: 'VueJs开发' }],    
  },
  //对数据获取之前的再次编译，可以理解为state的计算属性
  //获取数据的方法
  getters: {
    totalCount(state){
      return state.books.length;
    }
  },
  //组件中自定义事件,修改状态，并且是同步的，在组件中使用$store.commit('',params)这个和我们组件中的自定义事件类似
  //显示的更改state里的数据
  mutations: {
    onDelBook(state,id){
      state.books = state.books.filter(item=>item.id !== id);
    },
    onAddBook(state,item){
      state.books.push(item);
    }
  },
  //异步操作。在组件中使用是$store.dispatch('')
  actions: {
    onDelBook({ commit }, id) {
      commit('onDelBook', id);
    },
    onAddBook({commit},item){
      commit('onAddBook',item);
    }
  },
  //store的子模块，为了开发大型项目，方便状态管理而使用的
  modules: {
  }
});
