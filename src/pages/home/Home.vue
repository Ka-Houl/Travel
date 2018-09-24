<template>
  <div class="header">
     <!-- <div>this is a Home page</div> -->
     <!-- <router-link to="/Header">跳转到Header列表项</router-link> -->
     <home-header></home-header>
     <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default{
  name: 'Home',
  components: {
  	'home-header': HomeHeader,
  	'home-swiper': HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
