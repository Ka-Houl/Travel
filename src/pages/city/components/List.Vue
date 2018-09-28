<template>
	<div class="list">
		<div>
			<div class="hot-cities">
			  <div class="hot-cts-title">热门城市</div>
        <ul class="clearfix">
          <li>北京</li>
        	<li class="border-left">北京</li>
        	<li class="border-left">北京</li>
        	<li class="border-top">北京</li>
        	<li class="border-topleft">北京</li>
        	<li class="border-topleft">北京</li>
        	<li class="border-top">北京</li>
        	<li class="border-topleft">北京</li>
        	<li class="border-topleft">北京</li>
        	<li class="border-top">北京</li>
        	<li class="border-topleft">北京</li>
        	<li class="border-topleft">北京</li>
        </ul>
			</div>
			<div class="alphabet-menu">
				<div class="alphabet-menu-title">字母排序</div>
					<ul class="clearfix">
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
						<li>A</li>
					</ul>
			</div>
			<div class="alphabet-list">
        <div class="alphabet-list-title">A</div>
        <ul class="clearfix">
        	<li>安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        </ul>
			</div>
			<div class="alphabet-list">
        <div class="alphabet-list-title">A</div>
        <ul class="clearfix">
        	<li>安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        </ul>
			</div>
			<div class="alphabet-list">
        <div class="alphabet-list-title">A</div>
        <ul class="clearfix">
        	<li>安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        </ul>
			</div>
			<div class="alphabet-list">
        <div class="alphabet-list-title">A</div>
        <ul class="clearfix">
        	<li>安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-left">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-top">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        	<li class="border-topleft">安康</li>
        </ul>
			</div>

		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CityList'
	}
</script>

<style lang="stylus" scoped>
div{
	box-sizing: border-box;
}

.clearfix::after{
	content: "";
	display: block;
	clear: both;
}

.hot-cities,
alphabet-menu{
	width: 100%;
	height: 4.08rem; 
	line-height:4.08rem;
}

.hot-cities .hot-cts-title{
	height: .72rem;
}

.hot-cities .hot-cts-title,
.alphabet-menu .alphabet-menu-title,
.alphabet-list-title{
	width: 100%;
	line-height: .72rem;
	padding:0 .2rem;
	background-color: lightblue;
	background-color: #F5F5F5;
}

.hot-cities ul li{
	float: left;
	width: 33.33%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;
}

.alphabet-menu ul li{
	float: left;
	width: 16.67%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;	
}

.alphabet-list ul li{
	float: left;
	width: 25%;
	height: .9rem;
	line-height: .9rem;
	text-align: center;
}
</style>