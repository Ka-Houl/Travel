<template>
  <div class="icons-wrapper">
  	<div class="icon-box">
  		<div class="icon-img-box">
  			<img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
  		</div>
  		<p class="icon-description">旅游景点</p>
  	</div>
  </div>
</template>

<script type="text/javascript">
export default {
	name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.icons-wrapper{
	overflow: hidden;
  width: 100%;   
  height: 0;
  padding-bottom: 50%;
}

.icons-wrapper .icon-box{
	position: relative;
	float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
}

.icons-wrapper .icon-box .icon-img{
	display: block;
	margin: 0 auto;
	height: 100%;
}

.icons-wrapper .icon-box .icon-description{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTxtColor;
}
</style>

