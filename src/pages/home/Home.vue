<template>
  <div class="header">
     <!-- <div>this is a Home page</div> -->
     <!-- <router-link to="/Header">跳转到Header列表项</router-link> -->
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
     <home-recommend></home-recommend>
     <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'   
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default{
  name: 'Home',
  components: {
  	'home-header': HomeHeader,
  	'home-swiper': HomeSwiper,
  	'home-icons': HomeIcons,
  	'home-recommend': HomeRecommend,
  	'home-weekend': HomeWeekend,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
