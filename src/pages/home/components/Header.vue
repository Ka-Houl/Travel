<template>
  <div class="header">
     <!-- <div>this is a Header page</div> -->
     <div class="header-left">
       <span class="iconfont">&#xe624;</span>
     </div>
     <div class="header-middle">
        <span class="iconfont search-icon">&#xe632;</span>
        <div class="kw">输入城市/景点/游玩主题</div>
     	<input type="text" class="header-input">
     </div>
     <div class="header-right">
       城市
       <span class="iconfont arrow-icon">&#xe6aa;</span>
     </div>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/variables.styl';

  div{
  	display: flex;
  }

  .header{
    width: 100%;
    height: 0.88rem;
    color: #fff;
  	background-color: $bgColor;
  }

  .header .header-left{
    width: .8rem;
    height: 100%;
  	line-height: 0.88rem;
  	justify-content: center;
  }

  .header .header-middle{
  	position: relative;
    flex: 1;
    margin: 0.14rem 0
  }

  .header .header-middle .kw{
  	position: absolute;
  	top: 0.16rem;
  	left: 0.65rem;
  	color: #e4e7ea;
  }

  .header .header-middle .header-input{
  	width: 100%;
  	height: 100%;
  	border-radius: 0.06rem;
  }

  .header .header-middle .search-icon{
  	position: absolute;
  	top: .13rem;
  	left: .2rem;
  	color: #e4e7ea;
  }

  .header .header-right{
    width: 1.32rem;
    height: 100%;
  	line-height: 0.88rem;
  	justify-content: center;
  } 

  .header .header-right .arrow-icon{
  	font-size: .36rem;
  }
</style>
