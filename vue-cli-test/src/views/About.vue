<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-view/>
  </div>
</template>
<script>
export default {
  created(){
    console.log('route====>>',this.$route);
  },
  beforeRouteEnter(to,from,next){
    next();
  },
}
</script>
