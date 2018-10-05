<template>
	<div>
	  <detail-banner></detail-banner>
	  <detail-header></detail-header>
	  <div class="content-box">
	  	<detail-list v-bind:list="list"></detail-list>
	  </div>
	</div>
</template>

<script type="text/javascript">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
	name: 'CityDetail',
  components: {
  	'detail-banner': DetailBanner,
  	'detail-header': DetailHeader,
  	'detail-list': DetailList
  },
  data: function () {
  	return {
  		list: [{
  			title: '门票',
        children: [{
	         	title: '峨眉山成人票',
	         	children: [{
	         		title: '包含电子导游链接及授权码'
	         	}]
	        },{
	         	title: '峨眉山优惠人群票',
	         	children: [{
	         		title: '上车地址：峨眉山大酒店停车场'
	         	}]
	        }]
	      },{
        	title: '金顶索道'
        },{
        	title: '万年寺索道'
        },{
        	title: '观光车'
        },{
        	title: '景区直通车'
        }]
  	} 
  }
}
</script>

<style lang="stylus" scoped>
  .content-box{
  	height:45rem;
  }
</style>