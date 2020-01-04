<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <router-link :to="{name:'about',params:{user:'xiaoming'}}">about</router-link>
    </div>
    <button @click="clickBtn">点我</button>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods:{
    clickBtn(){
      this.$router.push('/about');
      setTimeout(()=>{
        this.$router.go(-1);
      },1000);
      setTimeout(()=>{
        this.$router.replace('/404');
      },2000);
    }
  }
}
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
  margin-right:10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
