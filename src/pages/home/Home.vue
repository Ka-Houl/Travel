<template>
  <div class="header">
     <!-- <div>this is a Home page</div> -->
     <!-- <router-link to="/Header">跳转到Header列表项</router-link> -->
     <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default{
  name: 'Home',
  components: {
  	HomeHeader: HomeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
