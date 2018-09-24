<template>
  <div class="header">
     <!-- <div>this is a Home page</div> -->
     <!-- <router-link to="/Header">跳转到Header列表项</router-link> -->
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default{
  name: 'Home',
  components: {
  	'home-header': HomeHeader,
  	'home-swiper': HomeSwiper,
  	'home-icons': HomeIcons 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
