<template>
  <div id="app">
    <book-input></book-input>
    <book-list></book-list>
    <p>书的总数：{{totalCount}}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import bookInput from "../components/book-input.vue";
import bookList from "../components/book-list.vue";
export default {
  name: "app",
  components: {
    bookInput,
    bookList
  },  
  computed:{
    ...mapGetters({totalCount:'totalCount'})
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
