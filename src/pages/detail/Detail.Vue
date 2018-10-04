<template>
	<div>
	  <detail-banner></detail-banner>
	  <detail-header></detail-header>
	  <div class="content-box"></div>
	</div>
</template>

<script type="text/javascript">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
	name: 'CityDetail',
  components: {
  	'detail-banner': DetailBanner,
  	'detail-header': DetailHeader
  },	
}
</script>

<style lang="stylus" scoped>
  .content-box{
  	height:45rem;
  }
</style>