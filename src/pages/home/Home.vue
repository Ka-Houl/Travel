<template>
  <div class="header">
     <!-- <div>this is a Home page</div> -->
     <!-- <router-link to="/Header">跳转到Header列表项</router-link> -->
     <home-header :city="city"></home-header>
     <home-swiper :swiperList="swiperList"></home-swiper>
     <home-icons :iconsList="iconsList"></home-icons>
     <home-recommend :recommend-list="recommendList"></home-recommend>
     <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'   
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
  	'home-header': HomeHeader,
  	'home-swiper': HomeSwiper,
  	'home-icons': HomeIcons,
  	'home-recommend': HomeRecommend,
  	'home-weekend': HomeWeekend,
  },
  data: function () {
     return{
     	city: '',
     	swiperList: [],
     	iconsList: [],
     	recommendList: [],
     	weekendList:[]

     }
  },
  methods: {
  	getHomeInfo: function () {
      axios.get('/api/index.json').then(this.getHomeInfoSuccess)
  	},
  	getHomeInfoSuccess: function (res) {
  		console.log(res);
  		var odata = res.data.data
  		if(res.data.ret && res.data.data) {
          this.city = odata.city;
          this.swiperList = odata.swiperList;
          this.iconsList = odata.iconsList;
          this.recommendList = odata.recommendList;
          this.weekendList = odata.weekendList
  		}
  	}
  },
  mounted: function () {
  	this.getHomeInfo();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
