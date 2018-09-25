<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont icon-heart">&#xe607;</span>
      猜你喜欢
    </div>
    <ul>
      <li class="list-item">
        <div class="item-img">
          <img src="http://img1.qunarzz.com/sight/p0/1601/e1/e19f8470b726162d90.water.jpg_200x200_adc73629.jpg">
        </div>
        <div class="item-img-tag">可订明日</div>
        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">韶关丹霞山</div>
            <div class="info-comment">
              <span>star</span>
              <span>16382条评论</span>
            </div>
            <div class="info-price">
              ￥95起
            </div>
          </div>
        </div>
      </li>
    </ul>    
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',

}
</script>

<style lang="stylus" scoped>
div{
  box-sizing: border-box;
}
.recommend-title{
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  background-color: #eee;
}

.recommend-title .icon-heart{
  color: red;
  margin-right: .08rem;
  margin-left: .13rem;
}

.list-item{
  position: relative;
  width: 100%;
  height: 2.4rem;  
}

.list-item .item-img{
  position: relative;
  float: left;
  width: 2.4rem;
  height: 2.4rem;  
  padding: 0.2rem;
}

.list-item .item-img-tag{
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.02rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: .2rem;
  text-indent: 0.04rem;
  background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);
  background-size: 100%;
}

.item-img img{
  width: 100%;
  height: 100% 
}

.list-item .item-info{
  float: left;
  width: 5.1rem;
  height: 2.4rem;
  padding: 0.4rem;
}

.item-info .inner-box{
  width: 100%;
  height: 100%;
}

.item-info .inner-box .info-title{
  height: .44rem;
  color: #212121;
  font-size: .32rem;
  line-height: .44rem;
}

.item-info .inner-box .info-comment{
  margin-top: .14rem;
  height: .34rem;
  background-color: pink; 
}

.item-info .inner-box .info-comment .icon-star{
  color: #ffb436;
  line-height: .4rem;
  font-size: .2rem;
}

.item-info .inner-box .info-price{
  position: relative;
  margin-top: .22rem;
  color: #616161;
  font-size: .24rem;
  line-height: .4rem;
}
</style>